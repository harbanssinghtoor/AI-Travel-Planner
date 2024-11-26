// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkiGRrYG51T37l2QQhJGBHvi4k1gYpd1c",
  authDomain: "travelplanner-e4db0.firebaseapp.com",
  projectId: "travelplanner-e4db0",
  storageBucket: "travelplanner-e4db0.firebasestorage.app",
  messagingSenderId: "33269987979",
  appId: "1:33269987979:web:e70cc4baaf1e549e84b28e",
  measurementId: "G-KFKFV229JD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


