import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyByWt4MN8gSsO-tWRttVulSkid3RnEb2_w",
  authDomain: "femhack-e5acc.firebaseapp.com",
  projectId: "femhack-e5acc",
  storageBucket: "femhack-e5acc.firebasestorage.app",
  messagingSenderId: "411160136674",
  appId: "1:411160136674:web:a54f3c42b1a3567c5047bb",
  measurementId: "G-T5QTB0QLMX"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);