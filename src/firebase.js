// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI_iXwmVEFY-wLZtAqVFtwBcRDmIrxYlo",
  authDomain: "icecream-b4f17.firebaseapp.com",
  projectId: "icecream-b4f17",
  storageBucket: "icecream-b4f17.appspot.com",
  messagingSenderId: "7574838555",
  appId: "1:7574838555:web:972c85b40d4ea470f547be",
  measurementId: "G-8NSV124PTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
