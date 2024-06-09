import React,{ createContext, useEffect, useState }from 'react';
import PropTypes from 'prop-types'; 
import auth from '../../firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const googleProvider= new GoogleAuthProvider();
   
    const createUser = (email, password) => {
      
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser=(email,password)=>{
     
      return signInWithEmailAndPassword(auth,email,password);
  }
  const logOut=()=>{
    return signOut(auth);
}

const signInWithGoogle=()=>{
  return signInWithPopup(auth,googleProvider)
}


    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
        
             setUser(currentUser)
         
            } else {
                setUser(null)
            }
          });
          return ()=>{
            return unSubscribe;

          }

    },[])



    const authInfo = {
      createUser,user,singInUser,logOut,signInWithGoogle
    }



    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node 
};

export default AuthProvider;