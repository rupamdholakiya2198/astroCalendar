import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcs72KyypkK3_Jw5DxhOSYenXVZE1IRKY",
  authDomain: "astro-calendar-1ad73.firebaseapp.com",
  projectId: "astro-calendar-1ad73",
  storageBucket: "astro-calendar-1ad73.firebasestorage.app",
  messagingSenderId: "874505291008",
  appId: "1:874505291008:web:ae89f64e0cd208833c1fe5",
  measurementId: "G-Q3KDP0MP8P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);