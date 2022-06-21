import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU86vilLsKCEwMugzG-hwn0EizlGuGRo4",
  authDomain: "itss-53d01.firebaseapp.com",
  projectId: "itss-53d01",
  storageBucket: "itss-53d01.appspot.com",
  messagingSenderId: "394000956482",
  appId: "1:394000956482:web:d9837a1899f7e5db2a81db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);