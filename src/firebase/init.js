// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChuwdvPQSMoz634DxMZzn3BKpnRcQAzKU",
  authDomain: "southernbooks-b34af.firebaseapp.com",
  projectId: "southernbooks-b34af",
  storageBucket: "southernbooks-b34af.appspot.com",
  messagingSenderId: "919651368644",
  appId: "1:919651368644:web:0b8ffc41ed552bc855d391",
  measurementId: "G-W5FTS7ECLT",
};

export const initializeFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return app;
};
