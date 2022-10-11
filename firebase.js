// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlD-AWtLPYU9fu_aS9yYoOpJ0WITLpi-E",
  authDomain: "website-6a057.firebaseapp.com",
  projectId: "website-6a057",
  storageBucket: "website-6a057.appspot.com",
  messagingSenderId: "948207338732",
  appId: "1:948207338732:web:9de026db590930909311c9",
  measurementId: "G-C5G0FW539Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
