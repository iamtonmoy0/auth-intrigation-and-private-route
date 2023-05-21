import { createContext, useState } from "react";
import {getAuth,  createUserWithEmailAndPassword } from 'firebase/auth';
import app from "../Firebase/Firebase.config";

const auth =getAuth(app)

export const AuthContext=createContext();
const AuthProvider =({children}) => {
	const [user,setUser]=useState(null)
       const createUser=(mail,pass)=>{

	return createUserWithEmailAndPassword(auth,mail,pass)
       }

	const authInfo={
		user,
		createUser,
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
