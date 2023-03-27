import firebase from "firebase/compat/app";
 
import "firebase/compat/auth";
export const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDVjuXUX4kV26WAMxoKyhbWCwsG4XXA8t8",
    authDomain: "loginform-tarannom.firebaseapp.com",
    projectId: "loginform-tarannom",
    storageBucket: "loginform-tarannom.appspot.com",
    messagingSenderId: "455272931663",
    appId: "1:455272931663:web:a7dd67322d29078f8de53a"
}).auth();