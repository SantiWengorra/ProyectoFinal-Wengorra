/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUw96ws-pQwackOV8ZSubkePIVrxda1og",
  authDomain: "proyecto-final-11226.firebaseapp.com",
  projectId: "proyecto-final-11226",
  storageBucket: "proyecto-final-11226.appspot.com",
  messagingSenderId: "744728619416",
  appId: "1:744728619416:web:f7c00f8483d75e4c5623ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App/>);