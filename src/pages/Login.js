import React from 'react'
import {auth, provider} from "../firebase-config" //variables that were exported from firebase-config file
import {signInWithPopup} from "firebase/auth"; //we used signInWithPopup we can also use it like that the page redirects toa anew page
import { useNavigate } from 'react-router-dom'; //this is a hook, used to handle navigation after an event

export default function Login({setIsAuth}) {
let navigate=useNavigate();
    const signInWithGoogle = () =>{
        signInWithPopup(auth,provider).then((res)=>{
    
            localStorage.setItem("isAuth", true)//creates a local variable which holds the value of authenticated as true after authentication     
            setIsAuth(true);
            navigate("/");//this redirects to the home page after authentication
        })
    }
  return (
    <div className="loginPage">
        <p className="p-login">Sign in with Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>
  )
}
