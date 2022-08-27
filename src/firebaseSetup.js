import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyCYD3r726lTsStsvI1TzpgdsDNLm16ssBc",
    authDomain: "gayatri-traders-7c8fc.firebaseapp.com",
    projectId: "gayatri-traders-7c8fc",
    storageBucket: "gayatri-traders-7c8fc.appspot.com",
    messagingSenderId: "475625961996",
    appId: "1:475625961996:web:b5dec763ee2b7b36434c29",
    measurementId: "G-22LRX8FCV1"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)


const db = getFirestore(app)

export {
    db
}
