/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../src/Firebase/Firebase.config";
// import { GithubAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvaider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    //   googel login
    const googleLoginUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    // github login
    const githubLogin  = () => {
        return signInWithPopup(auth, githubProvaider);
    };


    // log out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInformation = {
        user,
        loading,
        registerUser,
        loginUser,
        googleLoginUser,
        logOut,
        githubLogin,
    };

    return <AuthContext.Provider value={authInformation}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
