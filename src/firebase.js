import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFpC8PYuyFko7jlDJETbb7xesal_Yxf04",
  authDomain: "astro-calendar-e2086.firebaseapp.com",
  projectId: "astro-calendar-e2086",
  storageBucket: "astro-calendar-e2086.firebasestorage.app",
  messagingSenderId: "853142926822",
  appId: "1:853142926822:web:10963cd479adcfe34b5227",
  measurementId: "G-MC3ESK3LH8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();