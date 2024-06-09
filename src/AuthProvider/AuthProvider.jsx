import React,{ createContext, useEffect, useState }from 'react';
import PropTypes from 'prop-types'; 
import auth from '../../firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
   
    const createUser = (email, password) => {
      
        return createUserWithEmailAndPassword(auth, email, password);
    }


    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
        
             setUser(currentUser)
         
            } else {
            
            }
          });
          return ()=>{
            return unSubscribe;

          }

    },[])



    const authInfo = {
      createUser,user
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