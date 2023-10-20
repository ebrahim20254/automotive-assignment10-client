// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAkSaHIK6Up0q4F68dmD8dXd_OrEejYcQ",
  authDomain: "automotive-assignment10-client.firebaseapp.com",
  projectId: "automotive-assignment10-client",
  storageBucket: "automotive-assignment10-client.appspot.com",
  messagingSenderId: "931600117137",
  appId: "1:931600117137:web:0faa9e9bb57bb253363e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;