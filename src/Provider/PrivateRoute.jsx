import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {

    const location = useLocation()
    const {user,loading}=useContext(AuthContext)
    
    if(loading){
        return <Loading></Loading>

    }

    if(!user){
       return <Navigate to={`/auth/login`} state={location.pathname} ></Navigate>
        
        
    }


    return children
};

export default PrivateRoute;