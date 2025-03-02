import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

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
const auth = getAuth(app);
const db = getFirestore(app);

/**
 * Creates an admin user in Firebase Authentication and Firestore
 * @param email Admin user's email
 * @param password Admin user's password
 * @param displayName Admin user's display name
 * @returns Promise that resolves when the admin user is created
 */
export async function createAdminUser(
  email: string,
  password: string,
  displayName: string
): Promise<void> {
  try {
    console.log(`Creating admin user: ${displayName} (${email})...`);
    
    // Create the user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Create or update the user document in Firestore with admin privileges
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, {
      uid: user.uid,
      email: user.email,
      displayName,
      photoURL: null,
      isAdmin: true,
      createdAt: new Date().toISOString()
    });
    
    console.log(`Admin user created successfully with UID: ${user.uid}`);
    
    // Sign out the user
    await signOut(auth);
  } catch (error) {
    console.error('Error creating admin user:', error);
    throw error;
  }
}

/**
 * Promotes an existing user to admin
 * @param uid User ID to promote
 * @returns Promise that resolves when the user is promoted
 */
export async function promoteToAdmin(uid: string): Promise<void> {
  try {
    console.log(`Promoting user ${uid} to admin...`);
    
    // Check if the user exists
    const userDocRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userDocRef);
    
    if (!userDoc.exists()) {
      throw new Error(`User with UID ${uid} does not exist`);
    }
    
    // Update the user document to grant admin privileges
    const userData = userDoc.data();
    await setDoc(userDocRef, {
      ...userData,
      isAdmin: true
    });
    
    console.log(`User ${uid} promoted to admin successfully`);
  } catch (error) {
    console.error('Error promoting user to admin:', error);
    throw error;
  }
}

// This function can be called directly when running the script
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Please provide command: create-admin or promote-admin');
    process.exit(1);
  }
  
  const command = args[0];
  
  try {
    if (command === 'create-admin') {
      if (args.length < 4) {
        console.error('Usage: ts-node createAdmin.ts create-admin <email> <password> <displayName>');
        process.exit(1);
      }
      
      const email = args[1];
      const password = args[2];
      const displayName = args.slice(3).join(' ');
      
      await createAdminUser(email, password, displayName);
    } else if (command === 'promote-admin') {
      if (args.length < 2) {
        console.error('Usage: ts-node createAdmin.ts promote-admin <uid>');
        process.exit(1);
      }
      
      const uid = args[1];
      await promoteToAdmin(uid);
    } else {
      console.error('Unknown command. Use create-admin or promote-admin');
      process.exit(1);
    }
    
    console.log('Operation completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Operation failed:', error);
    process.exit(1);
  }
}

// Run the main function if this script is executed directly
if (require.main === module) {
  main();
} 