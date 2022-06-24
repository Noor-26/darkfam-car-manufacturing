// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDft8ElfHw1N9C_zuvMJ8SDPbhk2u058XQ",
  authDomain: "darkfam-car-manufacturing.firebaseapp.com",
  projectId: "darkfam-car-manufacturing",
  storageBucket: "darkfam-car-manufacturing.appspot.com",
  messagingSenderId: "587006435038",
  appId: "1:587006435038:web:c26820caddbf36c1ad2c4f",
  measurementId: "G-QB9S7PC3TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth;