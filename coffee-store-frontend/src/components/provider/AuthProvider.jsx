import{ createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init';


const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    };

    // login user
    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    };



    const authInfo = {user, setUser, createUser, loginUser};


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext};