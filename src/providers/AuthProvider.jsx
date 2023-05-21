import { createContext, useEffect, useState } from "react";
import {getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import app from "../Firebase/Firebase.config";

const auth =getAuth(app)

export const AuthContext=createContext();
const AuthProvider =({children}) => {
	const [user,setUser]=useState(null)
	const [loading,setLoading]=useState(true)

       const createUser=(mail,pass)=>{
        return createUserWithEmailAndPassword(auth,mail,pass)
       }

       const signIn=(mail,pass)=>{
	return signInWithEmailAndPassword(auth,mail,pass)
       }

       useEffect(()=>{
	const unsubscribe =onAuthStateChanged(auth,currentUser=>{
		setUser(currentUser)
		setLoading(false)

	});
	return ()=>{
		unsubscribe()
	}
       },[])
 const logOut=()=>{
	return signOut(auth);

 }
	const authInfo={
		user,
		loading,
		createUser,
		signIn,
		logOut
	}
	return (
		<>
			<AuthContext.Provider value={authInfo}>
			{children}
			</AuthContext.Provider>
		</>
	);
}

export default AuthProvider;
