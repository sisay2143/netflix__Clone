import { createContext, useContext, useEffect, useState } from "react";

import { auth,db } from '../firebase'
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
       onAuthStateChanged, } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";
const AuthContet = createContext()

export function AuthContetProvider({children}){
    const [user, setuser] = useState({})

    function Signup(email, password) {
         createUserWithEmailAndPassword(auth, email, password)
         setDoc(doc(db, 'users', email),{
            savedShows: []
         })

    } 
    function login (email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout(){
        return signOut(auth)
    }
         useEffect(() =>{
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setuser(currentUser)
            })
            return () =>{
                unsubscribe();
            }
         })

    return (
        <AuthContet.Provider value={{Signup, login, logout, user}}>
            {children}
        </AuthContet.Provider>
    )
}
export function UserAuth() {
    return useContext(AuthContet)
}