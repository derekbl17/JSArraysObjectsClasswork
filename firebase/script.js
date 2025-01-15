import { db } from "./firebaseConfig.js";

import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  query,
  getDocs,
  deleteField,
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

const updateDocument = async () => {
  await updateDoc(doc(db, "cars", "3C4SGvhk7svwUx0a1S7L"), {
    brand: "Toyota",
    model: "Corolla",
    years: "2020",
  })
    .then(() => {
      alert("successfully updated");
    })
    .catch((error) => {
      console.log(error);
    });
};
//updateDocument();

//get specific object
const getDocument = async () => {
  const data = await getDoc(doc(db, "cars", "Sc3ZCto4TNM0RhIjwmlm"));
  console.log(data.data());
};
//getDocument();

//get all objects + add to array
const getDocuments = async () => {
  const arr = [];
  const data = await getDocs(collection(db, "cars"));
  data.forEach((doc) =>
    console.log(doc.id, " => ", doc.data(), arr.push(doc.data()))
  );
  console.log(arr);
};
//getDocuments();

//delte specific object by ID
const deleteDocument = async () => {
  await deleteDoc(doc(db, "cars", "1"));
};
//deleteDocument();

const deleteDocumentField = async () => {
  await updateDoc(doc(db, "cars", "3C4SGvhk7svwUx0a1S7L"), {
    brand: deleteField(),
  });
};
//deleteDocumentField();
