'use client';

import { Spinner } from 'flowbite-react';
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) =>{

    const  {user,loading} = useContext(AuthContext)
    if(loading){
        return <Spinner aria-label="Default status example" />;
    }
    
    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}