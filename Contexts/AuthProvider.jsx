import React from 'react';
import { AuthContext } from './AuthContexts';
import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword, onAuthStateChanged,signOut,signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    // create new User using email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)       
    }

    // add the user's name and image
    const updateUserProfile = (name, image) => {
        setLoading(true)
        return updateProfile((auth.currentUser), {
            displayName: name,
            photoURL: image
        })
    }

    //sign in user with the email and password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //sign in user with google
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    //get the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {         
                setUser(currentUser);
                setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    //sign out user 
    const signOutUser = () => {
        return signOut(auth);
    }

    const authData = {
        createUser, updateUserProfile,signInUser, user,loading ,signOutUser,setUser,signInGoogle
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;