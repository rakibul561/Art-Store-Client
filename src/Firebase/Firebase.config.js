// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyAStxc_CIz81tDXrWkGfs5MZagXFkZidhk",
//   authDomain: "art-store-1.firebaseapp.com",
//   projectId: "art-store-1",
//   storageBucket: "art-store-1.appspot.com",
//   messagingSenderId: "160154887043",
//   appId: "1:160154887043:web:a24e3582032134e0360cb6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

// export default auth


import { initializeApp } from "firebase/app";

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
