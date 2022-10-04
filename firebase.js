// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJdx1RnVT-p_bOVKxQBDL3zhSU57FcoL0",
  authDomain: "chat-aaf78.firebaseapp.com",
  databaseURL: "https://chat-aaf78-default-rtdb.firebaseio.com",
  projectId: "chat-aaf78",
  storageBucket: "chat-aaf78.appspot.com",
  messagingSenderId: "722284002138",
  appId: "1:722284002138:web:f1f96464ff1884c5b25163"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase