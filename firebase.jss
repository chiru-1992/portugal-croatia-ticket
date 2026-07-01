// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import {
  getAuth,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOwcDVPWwGerciKReQ4Vn_8nmVf0nuhjs",
  authDomain: "portugal-croatia-tickets.firebaseapp.com",
  projectId: "portugal-croatia-tickets",
  storageBucket: "portugal-croatia-tickets.firebasestorage.app",
  messagingSenderId: "537992386461",
  appId: "1:537992386461:web:e8694e10d723dfcd880174",
  measurementId: "G-E3CJJ1HLDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Anonymous Login
signInAnonymously(auth)
  .then(() => {
    console.log("Anonymous login successful");
  })
  .catch((error) => {
    console.error(error);
  });

// Export for script.js
export {
  db,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  onSnapshot
};
