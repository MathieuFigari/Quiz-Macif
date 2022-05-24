import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyChy42vmMVJYjToHaNjc3uYy3He6dUNyU0",
  
    authDomain: "quiz-macif.firebaseapp.com",
  
    projectId: "quiz-macif",
  
    storageBucket: "quiz-macif.appspot.com",
  
    messagingSenderId: "729277587272",
  
    appId: "1:729277587272:web:154a57e4d51b7fe11edd7d"
  
  };


  const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)
  