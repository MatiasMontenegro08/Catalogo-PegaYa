import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7DTOccs8NHOMcVsZ6N_u1GURHTHW0yiQ",
    authDomain: "catalogo-pegaya.firebaseapp.com",
    projectId: "catalogo-pegaya",
    storageBucket: "catalogo-pegaya.firebasestorage.app",
    messagingSenderId: "706990603232",
    appId: "1:706990603232:web:593f492e2cf7ca3b638985",
    measurementId: "G-3CJ6Y42WGS"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const database = getFirestore();

export default database;