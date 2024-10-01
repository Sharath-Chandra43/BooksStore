// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5dwR65W5mVy1LeDRhHM6JV8kEJtdgevY",
  authDomain: "bookstore-9bea3.firebaseapp.com",
  projectId: "bookstore-9bea3",
  storageBucket: "bookstore-9bea3.appspot.com",
  messagingSenderId: "375335291924",
  appId: "1:375335291924:web:5520b6928245961bd3ab01",
  measurementId: "G-GX5TRT3QRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();