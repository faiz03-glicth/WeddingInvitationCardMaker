import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC3xBRTM2Oh-EBbGjxB0c_jz7xON8H5L8",
  authDomain: "wedding-card-maker-f09ae.firebaseapp.com",
  projectId: "wedding-card-maker-f09ae",
  storageBucket: "wedding-card-maker-f09ae.firebasestorage.app",
  messagingSenderId: "599262596200",
  appId: "1:599262596200:web:874bfafd9a506f0fa0ffdd",
  measurementId: "G-M7PN029N1J"
};



const app = initializeApp(firebaseConfig);
window.testFirestore = getFirestore(app);
const db = getFirestore(app);  
export { db };
