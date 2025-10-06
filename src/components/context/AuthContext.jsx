
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebaseConfig'; 

const AuthContext = createContext();


export function useAuth() {
  return useContext(AuthContext);
}


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null); 
  const [loading, setLoading] = useState(true); 


  const register = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    
        return updateProfile(userCredential.user, {
          displayName: name,
        }).then(() => userCredential);
      });
  };

  
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  
  const logOut = () => {
    return signOut(auth);
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); 
    });

    return unsubscribe;
  }, []);

  
  const value = {
    currentUser,
    register,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}