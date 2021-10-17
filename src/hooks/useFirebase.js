import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/Firebase.init";

initialAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return  signInWithPopup(auth, googleProvider);
    
    }

   

    const createUserEmailPassword = (email, password, name) => {
        
        createUserWithEmailAndPassword(auth, email, password)
        
        .then(result =>{
            console.log(result.user);
            updateProfile(auth.currentUser, { displayName: name })
           
        })
        .catch((error) => {
            console.log(error.message);
        });
    
    }
    const signInUserEmailPassword = (email, password) => {
        
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch((error) => {
            console.log(error.message);
        });
    
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({});
            }
        });

        return () => unsubscribe;
    }, []);

    return {
        signInWithGoogle,
        logOut,
        createUserEmailPassword,
        signInUserEmailPassword,
        user
    }



};

export default useFirebase;