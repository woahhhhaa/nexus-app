import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { getCurrentUser, signIn, signUp, logOut } from '../services/authService';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  logOut: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (err) {
        console.error('Error fetching current user:', err);
        setError('Failed to fetch user information');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleSignIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const user = await signIn(email, password);
      setCurrentUser(user);
    } catch (err) {
      console.error('Error signing in:', err);
      setError('Failed to sign in. Please check your credentials.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (email: string, password: string, displayName: string) => {
    try {
      setLoading(true);
      setError(null);
      const user = await signUp(email, password, displayName);
      setCurrentUser(user);
    } catch (err) {
      console.error('Error signing up:', err);
      setError('Failed to create account. This email may already be in use.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = async () => {
    try {
      setLoading(true);
      setError(null);
      await logOut();
      setCurrentUser(null);
    } catch (err) {
      console.error('Error logging out:', err);
      setError('Failed to log out');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    currentUser,
    loading,
    error,
    signIn: handleSignIn,
    signUp: handleSignUp,
    logOut: handleLogOut,
    clearError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 