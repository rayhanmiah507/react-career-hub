// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAe-hCk3TN9Ytbob1Sgie-UajqNplBQoWk",
    authDomain: "react-career-hub-5ddad.firebaseapp.com",
    projectId: "react-career-hub-5ddad",
    storageBucket: "react-career-hub-5ddad.appspot.com",
    messagingSenderId: "354251851267",
    appId: "1:354251851267:web:56fb612d94811533e4b036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;