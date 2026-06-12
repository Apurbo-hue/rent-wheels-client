import React from 'react';
import { AuthContext } from './AuthContexts';

const AuthProvider = ({ children }) => {
    

    const authData = {

    }
    return (
        <AuthContext value={authData}>
            
          </AuthContext>
    );
};

export default AuthProvider;