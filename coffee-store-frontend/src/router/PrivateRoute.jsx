import React, { useContext } from 'react';
import { AuthContext } from '../components/provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/shared/Loader';

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <Loader />
    }

    if(user && user.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate> 
};

export default PrivateRoute;