// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvhDyuFWPIOiIWvDgr_XhmChLXPGzJ-bM",
  authDomain: "jtech-2e9d3.firebaseapp.com",
  projectId: "jtech-2e9d3",
  storageBucket: "jtech-2e9d3.appspot.com",
  messagingSenderId: "9654694063",
  appId: "1:9654694063:web:8fbea551bbba6ac814e45a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)