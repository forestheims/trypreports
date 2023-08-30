"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Define a TypeScript interface for the user object
import { User } from '@supabase/auth-helpers-nextjs';


// Define the shape of your UserProvider props
interface UserProviderProps {
  children: React.ReactNode;
}

// Create a context for the user
interface UserContextType {
  user: User | null;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to access the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// UserProvider component
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const supabase = createClientComponentClient()

  useEffect(() => {
    // Check if a user is logged in using supabase.auth.getSession
    const checkUser = async () => {     

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        // User is logged in
        setUser(session.user);
      } else {
        // User is not logged in
        setUser(null);
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};