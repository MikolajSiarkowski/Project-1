import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Registration } from './Registration/Registration.tsx';
import { Login } from './Login/Login.tsx';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFmxqgldNNA6EX8P-hfHUs9d5DuzCz5kk",
  authDomain: "project-1-c41d5.firebaseapp.com",
  projectId: "project-1-c41d5",
  storageBucket: "project-1-c41d5.appspot.com",
  messagingSenderId: "827749369180",
  appId: "1:827749369180:web:3e714f9f17f14c51c9ed99",
  measurementId: "G-WX00S4L66F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
