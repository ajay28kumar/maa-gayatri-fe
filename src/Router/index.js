import {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {
    Home,
    Billing,
    Login,
    Stocks
} from '../Page';
import Header from '../Component/Headers'





// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const PageRouter = () => {
    useEffect(()=>{
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCYD3r726lTsStsvI1TzpgdsDNLm16ssBc",
            authDomain: "gayatri-traders-7c8fc.firebaseapp.com",
            projectId: "gayatri-traders-7c8fc",
            storageBucket: "gayatri-traders-7c8fc.appspot.com",
            messagingSenderId: "475625961996",
            appId: "1:475625961996:web:b5dec763ee2b7b36434c29",
            measurementId: "G-22LRX8FCV1"
        };
        // Initialize Firebase
        initializeApp(firebaseConfig);
    },[]);

   return (
   <BrowserRouter>
   <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="invoice" element={<Billing />} />
            <Route path="stocks" element={<Stocks />} />
        </Routes>
    </BrowserRouter>)
}

export default PageRouter;