// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsUJk6CYcWJR1jD9cjeM8xSFb2mtRW8Lc",
  authDomain: "inthere-84584.firebaseapp.com",
  projectId: "inthere-84584",
  storageBucket: "inthere-84584.appspot.com",
  messagingSenderId: "802775690883",
  appId: "1:802775690883:web:a727d30ae85470969ff5b6",
  measurementId: "G-YEQZKMK6L0",
  databaseURL: "https://inthere-84584-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
