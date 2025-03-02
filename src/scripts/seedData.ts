import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { nexusData } from '../data/nexusData';
import { NexusData } from '../types';

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

/**
 * Seeds the Firestore database with sample state nexus data
 * @param clearExisting Whether to clear existing data before seeding
 * @returns Promise that resolves when seeding is complete
 */
export async function seedStatesData(clearExisting: boolean = false): Promise<void> {
  const statesCollection = collection(db, 'states');
  
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
    
    // Seed with sample data
    console.log('Seeding states data...');
    const seedPromises = nexusData.map(async (stateData: NexusData) => {
      const stateDocRef = doc(db, 'states', stateData.state);
      await setDoc(stateDocRef, stateData);
      console.log(`Added/updated state: ${stateData.state}`);
    });
    
    await Promise.all(seedPromises);
    console.log(`Successfully seeded ${nexusData.length} states.`);
  } catch (error) {
    console.error('Error seeding states data:', error);
    throw error;
  }
}

/**
 * Creates a sample admin user in Firestore
 * @param uid User ID from Firebase Authentication
 * @param email User's email
 * @param displayName User's display name
 * @returns Promise that resolves when the admin user is created
 */
export async function createAdminUser(
  uid: string, 
  email: string, 
  displayName: string
): Promise<void> {
  try {
    const userDocRef = doc(db, 'users', uid);
    await setDoc(userDocRef, {
      uid,
      email,
      displayName,
      photoURL: null,
      isAdmin: true,
      createdAt: new Date().toISOString()
    });
    console.log(`Created admin user: ${displayName} (${email})`);
  } catch (error) {
    console.error('Error creating admin user:', error);
    throw error;
  }
}

// This function can be called directly when running the script
async function main() {
  const args = process.argv.slice(2);
  const shouldClearExisting = args.includes('--clear');
  
  try {
    await seedStatesData(shouldClearExisting);
    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

// Run the main function if this script is executed directly
if (require.main === module) {
  main();
} 