// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlLn68scdu8HGKko9UJyT_nedvaMq1A8Q",
  authDomain: "blog-react-firebase-e5812.firebaseapp.com",
  projectId: "blog-react-firebase-e5812",
  storageBucket: "blog-react-firebase-e5812.appspot.com",
  messagingSenderId: "224089748917",
  appId: "1:224089748917:web:9078d2fd40199b618c15fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();