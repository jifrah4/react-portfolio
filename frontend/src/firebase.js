import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN9_Jg7_9JVk-F-knRqAz0nFC5B3xtzuo",
  authDomain: "portfolio-auth-dd935.firebaseapp.com",
  projectId: "portfolio-auth-dd935",
  storageBucket: "portfolio-auth-dd935.firebasestorage.app",
  messagingSenderId: "912646699408",
  appId: "1:912646699408:web:09a371c8bcbfa07bb61b15",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
