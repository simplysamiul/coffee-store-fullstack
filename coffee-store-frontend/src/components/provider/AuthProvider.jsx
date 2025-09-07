import{ createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.init';
import { toast } from 'react-toastify';


const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    };

    // login user
    const loginUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    };

    // logout user
    const logOut = () => {
        signOut(auth)
        .then(() => {
            toast.success("User logout successfully ....!", { theme: "colored" });
        }).catch(err => {
            toast.error(err.message, { theme: "colored" });
        })
    }


    // auth info
    const authInfo = {user, setUser, createUser, loginUser, loading, setLoading, logOut};

    // user login observer

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscriber();
        }
    },[]);


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext};