// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_API_KEY,
//   authDomain: process.env.REACT_AUTH_DOMAIN,
//   projectId: process.env.REACT_PROJET_ID,
//   storageBucket: process.env.REACT_STORAGE,
//   messagingSenderId: process.env.REACT_SENDER ,
//   appId: process.env.REACT_APP_ID,
//   measurementId: process.env.REACT_MEASURE
// };
const firebaseConfig = {
  apiKey: "AIzaSyDJRDzOXsWml_M9KUzzJWE-XRUKcv2yb_o",
  authDomain: "netflix-clone-523bc.firebaseapp.com",
  projectId: "netflix-clone-523bc",
  storageBucket: "netflix-clone-523bc.appspot.com",
  messagingSenderId: "460067051169",
  appId: "1:460067051169:web:732202bcc1743b4cdac2e0",
  measurementId: "G-VXN2DR4VMM"
};
// REACT_API_KEY = AIzaSyDJRDzOXsWml_M9KUzzJWE
// REACT_AUTH_DOMAIN = netflix-clone-523bc.firebaseapp.com
// REACT_PROJET_ID = netflix-clone-523bc
// REACT_STORAGE = netflix-clone-523bc.appspot.com
// REACT_SENDER = 460067051169
// REACT_APP_ID = 1:460067051169:web:732202bcc1743b4cdac2e0

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app)