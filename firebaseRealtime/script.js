import { db } from "./firebaseConfig.js";

import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  child,
  get,
  remove,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const enterID = document.getElementById("enterID");
const enterName = document.getElementById("enterName");
const enterDescription = document.getElementById("enterDescription");

const insert = document.getElementById("insert");
const update = document.getElementById("update");
const removeb = document.getElementById("remove");

// id required, should be used with update to target spec item
// insert.addEventListener("click", (e) => {
//   e.preventDefault();

//   set(ref(db, "product/" + enterID.value), {
//     id: enterID.value,
//     name: enterName.value,
//     description: enterDescription.value,
//   })
//     .then(() => {
//       alert("data added");
//     })
//     .catch((err) => console.log(err));
// });

// auto id
insert.addEventListener("click", (e) => {
  e.preventDefault();

  set(push(ref(db, "product/")), {
    id: enterID.value,
    name: enterName.value,
    description: enterDescription.value,
  })
    .then(() => {
      alert("data added");
    })
    .catch((err) => console.log(err));
});

// get
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

update.addEventListener("click", (e) => {
  e.preventDefault();

  onValue(ref(db, "product/" + enterID.value), (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    enterName.value = data.name;
    enterDescription.value = data.description;
  });
});

// delete
removeb.addEventListener("click", (e) => {
  e.preventDefault();
  // no checks raw
  remove(child(ref(db), "product/" + enterID.value));
});
