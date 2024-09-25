// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Add this import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxeEnRUkGJYoMJhBzssTTOpyN12DZxEkk",
  authDomain: "twiter-24868.firebaseapp.com",
  projectId: "twiter-24868",
  storageBucket: "twiter-24868.appspot.com",
  messagingSenderId: "133147769385",
  appId: "1:133147769385:web:45e2716c1b30c5d1e6ba38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication reference
export const auth = getAuth(app);

// Google provider setup
export const provider = new GoogleAuthProvider();

// Get Firestore database reference
export const db = getFirestore(app);

// Get Storage reference
export const storage = getStorage(app); // This line is corrected
