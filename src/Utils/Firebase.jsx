
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArgXhaRWMEfJGUJmivXhgHywJ_gE6lr0E",
    authDomain: "treasure-hunt-cd114.firebaseapp.com",
    projectId: "treasure-hunt-cd114",
    storageBucket: "treasure-hunt-cd114.appspot.com",
    messagingSenderId: "214000684618",
    appId: "1:214000684618:web:b372fb36e407e3c50ae0b3"
  };
  export const firebaseApp = initializeApp(firebaseConfig);

  export const db = getFirestore(firebaseApp)
