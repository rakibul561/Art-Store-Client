import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const [user, setUser] = useState(null)
    console.log(user);

    //    crate user

    const crateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sing in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    /* Github Login */
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // log out user 
    const logOut = () =>{

         signOut(auth)
    }





    //  observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
        });

    }, [])


    const allValues = {

        crateUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user

    }
    return (

        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;