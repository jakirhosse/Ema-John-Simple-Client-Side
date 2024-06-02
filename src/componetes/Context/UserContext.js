import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { app } from '../../firebase/firebase.config';

 export const AuthContext = createContext()
 const auth = getAuth(app)


const UserContext = ({children}) => {
        const [user ,SetUser ] = useState(null)
    const [loading,setLoading] = useState(true)

        const createUser = (email ,password) => {
            setLoading(true)
            return  createUserWithEmailAndPassword(auth ,email,password)
        }

        const signIn = (email,password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
        }
        
        const logOut = () => {
            setLoading(true)
            return signOut(auth)
        }
        
        useEffect(() => { 
            const unSubCribe = onAuthStateChanged(auth,currentUser => {
                console.log('current user',currentUser);
                SetUser(currentUser)
                setLoading(false)
            })
            return () => unSubCribe()
        },[])
        const authInfo = {
           user,
           loading,
           createUser,
           signIn,
           logOut
        }
        return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>   
        );
};

export default UserContext;