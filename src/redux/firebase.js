import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB6kVGYdLqG8SWTzJWI_JRLaJfImBgc1EQ",
  authDomain: "learn-lingo-5f326.firebaseapp.com",
  projectId: "learn-lingo-5f326",
  storageBucket: "learn-lingo-5f326.firebasestorage.app",
  messagingSenderId: "409713282566",
  appId: "1:409713282566:web:86eb40135099a886f03d87",
  databaseURL:
    "https://learn-lingo-5f326-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const auth = getAuth(app);

export { db, auth };
