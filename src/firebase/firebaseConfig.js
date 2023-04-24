import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQEjyXQZfUq1NoIbvi7tJIyEbUdnGhNMU",
  authDomain: "tazitas-ecommerce.firebaseapp.com",
  projectId: "tazitas-ecommerce",
  storageBucket: "tazitas-ecommerce.appspot.com",
  messagingSenderId: "398262112639",
  appId: "1:398262112639:web:e38757b8c380879e878a4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

