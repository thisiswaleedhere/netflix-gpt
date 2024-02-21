// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBA14PVo7_rotQDIq1Pl7H1hKwK63WYNEE",
    authDomain: "netflix-gpt-723a7.firebaseapp.com",
    projectId: "netflix-gpt-723a7",
    storageBucket: "netflix-gpt-723a7.appspot.com",
    messagingSenderId: "740741619002",
    appId: "1:740741619002:web:a4a089dfa1da63565b4403",
    measurementId: "G-TYJWFPE5MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);