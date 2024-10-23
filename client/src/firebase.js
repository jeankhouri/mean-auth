// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mean-auth-c0131.firebaseapp.com",
  projectId: "mean-auth-c0131",
  storageBucket: "mean-auth-c0131.appspot.com",
  messagingSenderId: "307130103930",
  appId: "1:307130103930:web:0d5ccd09314d3d575aa3c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);