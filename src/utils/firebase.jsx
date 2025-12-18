// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJPHSxgsBb8D_MZ33vwR7IqBN4f93iidc",
    authDomain: "netflix-333a0.firebaseapp.com",
    projectId: "netflix-333a0",
    storageBucket: "netflix-333a0.firebasestorage.app",
    messagingSenderId: "254517837251",
    appId: "1:254517837251:web:f2ddcda74b27c6c6475176",
    measurementId: "G-Z853MKXR3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();