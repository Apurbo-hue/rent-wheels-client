import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthContexts';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <p>loading...</p>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }}
        replace></Navigate>
};

export default PrivateRouter;