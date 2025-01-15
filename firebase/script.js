import { db } from "./firebaseConfig.js";

import {
  doc,
  setDoc,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Add a new document in collection "cities"
const setDocument = async () => {
  await setDoc(doc(db, "cars", "1"), {
    brand: "Audi",
    model: "Q7",
    years: "2024",
  });
};
//setDocument();

const addDocument = async () => {
  await addDoc(collection(db, "cars"), {
    brand: "Mercedes",
    model: "J15",
    years: "2025",
  });
};
//addDocument();
