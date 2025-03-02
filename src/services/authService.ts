import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { User } from '../types';

// Sign up a new user
export const signUp = async (email: string, password: string, displayName: string): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update the user's profile with the display name
    await updateProfile(user, { displayName });
    
    // Create a user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      displayName,
      photoURL: user.photoURL,
      isAdmin: false,
      createdAt: new Date().toISOString()
    });
    
    return {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName,
      photoURL: user.photoURL,
      isAdmin: false
    };
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Sign in an existing user
export const signIn = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Get the user's data from Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.data();
    
    return {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName,
      photoURL: user.photoURL,
      isAdmin: userData?.isAdmin || false
    };
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

// Sign out the current user
export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

// Get the current user
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        unsubscribe();
        
        if (user) {
          try {
            // Get the user's data from Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            const userData = userDoc.data();
            
            resolve({
              uid: user.uid,
              email: user.email || '',
              displayName: user.displayName,
              photoURL: user.photoURL,
              isAdmin: userData?.isAdmin || false
            });
          } catch (error) {
            console.error('Error getting user data:', error);
            reject(error);
          }
        } else {
          resolve(null);
        }
      },
      reject
    );
  });
};

// Check if a user is an admin
export const isUserAdmin = async (uid: string): Promise<boolean> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    const userData = userDoc.data();
    
    return userData?.isAdmin || false;
  } catch (error) {
    console.error('Error checking if user is admin:', error);
    return false;
  }
}; 