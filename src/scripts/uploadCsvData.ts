import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';
import { NexusData, NexusRuleset } from '../types';

// Initialize Firebase with environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface CsvRow {
  state: string;
  income_threshold_service: string;
  employee_count_service: string;
  property_value_service: string;
  dollar_nexus_threshold_service: string;
  physical_presence_service: string;
  additional_nexus_criteria_service: string;
  authoritative_source_service: string;
  citation_url_service: string;
  notes_service: string;
  income_threshold_non_service: string;
  employee_count_non_service: string;
  property_value_non_service: string;
  dollar_nexus_threshold_non_service: string;
  physical_presence_non_service: string;
  additional_nexus_criteria_non_service: string;
  authoritative_source_non_service: string;
  citation_url_non_service: string;
  notes_non_service: string;
  [key: string]: string;
}

/**
 * Converts a CSV row to NexusData format
 * @param row The CSV row data
 * @returns NexusData object
 */
function convertCsvRowToNexusData(row: CsvRow): NexusData {
  // Convert string values to appropriate types
  const parseNumericValue = (value: string): number | null => {
    if (!value || value.toLowerCase() === 'null' || value.trim() === '') {
      return null;
    }
    // Remove any non-numeric characters except decimal point
    const numericValue = value.replace(/[^0-9.]/g, '');
    return numericValue ? parseFloat(numericValue) : null;
  };

  // Create service-based ruleset
  const serviceBased: NexusRuleset = {
    income_threshold: parseNumericValue(row.income_threshold_service),
    employee_count: parseNumericValue(row.employee_count_service),
    property_value: parseNumericValue(row.property_value_service),
    dollarNexusThreshold: row.dollar_nexus_threshold_service || undefined,
    physicalPresence: row.physical_presence_service || undefined,
    additionalNexusCriteria: row.additional_nexus_criteria_service || undefined,
    authoritativeSource: row.authoritative_source_service || undefined,
    citation_url: row.citation_url_service || undefined,
    notes: row.notes_service || undefined
  };

  // Create non-service-based ruleset
  const nonServiceBased: NexusRuleset = {
    income_threshold: parseNumericValue(row.income_threshold_non_service),
    employee_count: parseNumericValue(row.employee_count_non_service),
    property_value: parseNumericValue(row.property_value_non_service),
    dollarNexusThreshold: row.dollar_nexus_threshold_non_service || undefined,
    physicalPresence: row.physical_presence_non_service || undefined,
    additionalNexusCriteria: row.additional_nexus_criteria_non_service || undefined,
    authoritativeSource: row.authoritative_source_non_service || undefined,
    citation_url: row.citation_url_non_service || undefined,
    notes: row.notes_non_service || undefined
  };

  // Create and return the NexusData object
  return {
    state: row.state,
    last_updated: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
    contributor_id: 'csv_import',
    serviceBased,
    nonServiceBased,
    // Include legacy fields for backward compatibility
    dollarNexusThreshold: row.dollar_nexus_threshold_service || row.dollar_nexus_threshold_non_service,
    physicalPresence: row.physical_presence_service || row.physical_presence_non_service,
    additionalNexusCriteria: row.additional_nexus_criteria_service || row.additional_nexus_criteria_non_service,
    authoritativeSource: row.authoritative_source_service || row.authoritative_source_non_service,
    citation_url: row.citation_url_service || row.citation_url_non_service
  };
}

/**
 * Reads a CSV file and uploads the data to Firestore
 * @param csvFilePath Path to the CSV file
 * @param clearExisting Whether to clear existing data before uploading
 * @returns Promise that resolves when upload is complete
 */
export async function uploadCsvData(csvFilePath: string, clearExisting: boolean = false): Promise<void> {
  const statesCollection = collection(db, 'states');
  const results: CsvRow[] = [];

  // Read the CSV file
  await new Promise<void>((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data: CsvRow) => results.push(data))
      .on('end', () => resolve())
      .on('error', (error) => reject(error));
  });

  try {
    // Optionally clear existing data
    if (clearExisting) {
      console.log('Clearing existing states data...');
      const snapshot = await getDocs(statesCollection);
      const deletePromises = snapshot.docs.map(document => 
        deleteDoc(doc(db, 'states', document.id))
      );
      await Promise.all(deletePromises);
      console.log(`Cleared ${snapshot.docs.length} existing state records.`);
    }
    
    // Upload CSV data
    console.log('Uploading CSV data...');
    const uploadPromises = results.map(async (row: CsvRow) => {
      const nexusData = convertCsvRowToNexusData(row);
      const stateDocRef = doc(db, 'states', nexusData.state);
      await setDoc(stateDocRef, nexusData);
      console.log(`Added/updated state: ${nexusData.state}`);
    });
    
    await Promise.all(uploadPromises);
    console.log(`Successfully uploaded ${results.length} states from CSV.`);
  } catch (error) {
    console.error('Error uploading CSV data:', error);
    throw error;
  }
}

// This function can be called directly when running the script
async function main() {
  const args = process.argv.slice(2);
  const shouldClearExisting = args.includes('--clear');
  
  // Get the CSV file path from command line arguments
  const csvFilePath = args.find(arg => !arg.startsWith('--'));
  
  if (!csvFilePath) {
    console.error('Error: CSV file path is required.');
    console.log('Usage: npm run upload-csv <path-to-csv-file> [--clear]');
    process.exit(1);
  }

  // Resolve the file path
  const resolvedPath = path.resolve(process.cwd(), csvFilePath);
  
  // Check if the file exists
  if (!fs.existsSync(resolvedPath)) {
    console.error(`Error: File not found at ${resolvedPath}`);
    process.exit(1);
  }
  
  try {
    await uploadCsvData(resolvedPath, shouldClearExisting);
    console.log('CSV upload completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('CSV upload failed:', error);
    process.exit(1);
  }
}

// Run the main function if this script is executed directly
if (require.main === module) {
  main();
} 