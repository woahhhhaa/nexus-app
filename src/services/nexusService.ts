import { collection, doc, getDocs, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { NexusData } from '../types';

const statesCollection = collection(db, 'states');

/**
 * Get all states data from Firestore
 * Expects each document to have serviceBased and nonServiceBased sub-objects.
 */
export async function getAllStatesData(): Promise<NexusData[]> {
  try {
    const snapshot = await getDocs(statesCollection);
    return snapshot.docs.map(doc => doc.data() as NexusData);
  } catch (error) {
    console.error('Error getting states data:', error);
    throw error;
  }
}

/**
 * Get data for a specific state
 */
export async function getStateData(state: string): Promise<NexusData | null> {
  try {
    const stateDocRef = doc(db, 'states', state);
    const snapshot = await getDoc(stateDocRef);
    if (snapshot.exists()) {
      return snapshot.data() as NexusData;
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error getting data for state ${state}:`, error);
    throw error;
  }
}

/**
 * Save or update a state's data directly
 * This will overwrite the entire document with the new object,
 * including serviceBased and nonServiceBased.
 */
export async function saveStateData(stateData: NexusData): Promise<void> {
  try {
    const stateDocRef = doc(db, 'states', stateData.state);
    await setDoc(stateDocRef, stateData);
  } catch (error) {
    console.error('Error saving state data:', error);
    throw error;
  }
}