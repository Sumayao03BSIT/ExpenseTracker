import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBUsDIb4JpjN1e4g4jcG1jmshnXT0w0XkA",

  authDomain: "heehee-65339.firebaseapp.com",

  projectId: "heehee-65339",

  storageBucket: "heehee-65339.appspot.com",

  messagingSenderId: "8659107939",

  appId: "1:8659107939:web:565f15ee12f3d87e4a7856",

  measurementId: "G-MM9RZ597TJ"

};

initializeApp(firebaseConfig);

const db = getFirestore();
export default db