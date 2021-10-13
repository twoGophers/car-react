// Import the functions you need from the SDKs you need
import firebase from "firebase";
import {
    initializeApp
} from "firebase/app";
import {
    getDatabase
} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBOikhzaF9TU8Rb7BXy8PnXU5edhGqqdRQ",
    authDomain: "car-react-ba290.firebaseapp.com",
    databaseURL: "https://car-react-ba290-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "car-react-ba290",
    storageBucket: "car-react-ba290.appspot.com",
    messagingSenderId: "1010205647266",
    appId: "1:1010205647266:web:876096ebb778367e29d2fb"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase();

export default {
    app,
    database
};