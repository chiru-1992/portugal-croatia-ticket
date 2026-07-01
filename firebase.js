import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  collection
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOwcDVPWwGerciKReQ4Vn_8nmVf0nuhjs",
  authDomain: "portugal-croatia-tickets.firebaseapp.com",
  projectId: "portugal-croatia-tickets",
  storageBucket: "portugal-croatia-tickets.firebasestorage.app",
  messagingSenderId: "537992386461",
  appId: "1:537992386461:web:c889e03d7707ca51880174"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  collection
};
