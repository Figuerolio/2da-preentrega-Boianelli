// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgKxO2EG6M0Ml4OQL_Wyzgg8BG1CtwS0M",
  authDomain: "proyecto-54030-boianelli.firebaseapp.com",
  projectId: "proyecto-54030-boianelli",
  storageBucket: "proyecto-54030-boianelli.appspot.com",
  messagingSenderId: "991149424844",
  appId: "1:991149424844:web:d56b5e87cb4161636c8269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);