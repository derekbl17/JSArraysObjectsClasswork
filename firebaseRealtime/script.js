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
const enterLink = document.getElementById("enterLink");
const tbody = document.getElementById("tbody");

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
  if (
    (enterID.value, enterName.value, enterDescription.value, enterLink.value)
  ) {
    set(ref(db, "product/" + enterID.value), {
      name: enterName.value,
      link: enterLink.value,
      id: enterID.value,
      description: enterDescription.value,
    })
      .then(() => {
        alert("data added");
      })
      .catch((err) => console.log(err));
    updater();
  } else {
    alert("invalid input field(s)");
  }
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
    enterLink.value = data.link;
  });
});

// delete
removeb.addEventListener("click", (e) => {
  e.preventDefault();
  onValue(ref(db, "product/" + enterID.value), (snapshot) => {
    const data = snapshot.val();
    if (data) {
      remove(child(ref(db), "product/" + enterID.value));
      updater();
      alert("item removed");
    }
  });
});

const arr = ["id", "name", "description", "link"];
function updater() {
  tbody.innerHTML = "";
  onValue(ref(db, "product/"), (snapshot) => {
    const data = snapshot.val();
    for (let i in data) {
      onValue(ref(db, "product/" + i), (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        const tRow = document.createElement("tr");
        tbody.append(tRow);
        for (let z of arr) {
          if (z == "link") {
            const imag = document.createElement("img");
            imag.id = "tableImg";
            imag.src = `${data[z]}`;
            const tData = document.createElement("td");
            tRow.append(tData);
            tData.append(imag);
          } else {
            const tData = document.createElement("td");
            tRow.append(tData);
            tData.innerText = `${data[z]}`;
          }
        }
      });
    }
  });
}

window.onload = () => {
  updater();
};
