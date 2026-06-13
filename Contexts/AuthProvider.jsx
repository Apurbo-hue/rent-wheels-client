import React from 'react';
import { AuthContext } from './AuthContexts';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.config';
// import { useEffect } from 'react';


const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile((auth.currentUser), {
            displayName: name,
            photoURL: image
        })
    }

    
    const authData = {
        createUser, updateUserProfile
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;