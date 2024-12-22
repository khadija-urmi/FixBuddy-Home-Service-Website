// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFJYausUZHiQnTW7p0vcCreMfoBkOoDRU",
    authDomain: "home-service-website.firebaseapp.com",
    projectId: "home-service-website",
    storageBucket: "home-service-website.firebasestorage.app",
    messagingSenderId: "38522551478",
    appId: "1:38522551478:web:c880ffd16349cd1db83a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;