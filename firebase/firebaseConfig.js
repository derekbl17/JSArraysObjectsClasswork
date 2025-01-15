// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS3_kSSOnIuboWp-xlzjp9k6AmzLh7dCg",
  authDomain: "first-13784.firebaseapp.com",
  projectId: "first-13784",
  storageBucket: "first-13784.firebasestorage.app",
  messagingSenderId: "76438412827",
  appId: "1:76438412827:web:377ce42db172e929c2a2be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
