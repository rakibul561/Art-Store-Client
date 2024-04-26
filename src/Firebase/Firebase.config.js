// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoqUoVlJ1cwJGQuHB1Eb_7M9C24_Eq2r8",
  authDomain: "art-store-client.firebaseapp.com",
  projectId: "art-store-client",
  storageBucket: "art-store-client.appspot.com",
  messagingSenderId: "327025407246",
  appId: "1:327025407246:web:f2388c5046b1224513935f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
