// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUUbUd4YyylKAiemPtK2oPYTYJ75MkW3E",
  authDomain: "skillswap-9e923.firebaseapp.com",
  projectId: "skillswap-9e923",
  storageBucket: "skillswap-9e923.firebasestorage.app",
  messagingSenderId: "458322301905",
  appId: "1:458322301905:web:6b39b40b04faa2b92686f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;