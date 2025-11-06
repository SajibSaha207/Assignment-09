import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

const [user, setUser] = useState({});
const [loading, setLoading] = useState(true)
useEffect(()=>{
    const signOut = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);

    });
    return()=>signOut();
},[])

const authData = {
    user,
    setUser,
};
    return <AuthContext value={authData}>{children}</AuthContext> 
     
    
};

export default AuthProvider;