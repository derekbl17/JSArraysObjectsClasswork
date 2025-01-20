import { app } from "./firebaseConfig.js";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  update,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const database = getDatabase(app);
const auth = getAuth();

const menuRegBtn = document.getElementById("menu-reg");
const menuLogBtn = document.getElementById("menu-log");
const menuSignOutBtn = document.getElementById("signout-button");

const regContainer = document.getElementById("reg-container");
const logContainer = document.getElementById("log-container");

const regEmailInput = document.getElementById("register-email");
const regPassInput = document.getElementById("register-password");
const regButton = document.getElementById("register-button");

const logEmailInput = document.getElementById("login-email");
const logPassInput = document.getElementById("login-password");
const logButton = document.getElementById("login-button");

const panel = document.createElement("img");
const infoSection = document.getElementById("info");

menuRegBtn.addEventListener("click", (e) => {
  regContainer.style.display = "block";
  logContainer.style.display = "none";
});

menuLogBtn.addEventListener("click", (e) => {
  logContainer.style.display = "block";
  regContainer.style.display = "none";
});

const authorizationFunc = (user) => {
  if (user) {
    const uid = user.uid;

    get(child(ref(database), "users/" + uid))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersFromDB = snapshot.val();
          const userRole = usersFromDB.role;
          regContainer.style.display = "none";

          if (userRole === "admin") {
            console.log("ADMIN ACCESS GRANTED");
            panel.src =
              "https://static.vecteezy.com/system/resources/previews/019/194/935/non_2x/global-admin-icon-color-outline-vector.jpg";
            panel.alt = `${userRole} panel image`;
            infoSection.append(panel);
            menuRegBtn.style.display = "none";
            menuLogBtn.style.display = "none";
            menuSignOutBtn.style.display = "block";
          } else {
            console.log("Grey-suit");
            panel.src =
              "https://static.vecteezy.com/system/resources/previews/017/800/528/non_2x/user-simple-flat-icon-illustration-vector.jpg";
            panel.alt = `${userRole} panel image`;
            infoSection.append(panel);
            menuRegBtn.style.display = "none";
            menuLogBtn.style.display = "none";
            menuSignOutBtn.style.display = "block";
          }
        } else {
          console.log("No data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("Vartotojas neprisijunges");
  }
};

// registracija

regButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(regEmailInput.value, regPassInput.value);

  const email = regEmailInput.value.trim();
  const password = regPassInput.value.trim();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const loginTime = new Date();

      set(ref(database, "users/" + user.uid), {
        email: email,
        role: "simple",
        timestamp: `${loginTime}`,
      })
        .then(() => {
          console.log("Vartotojo duomenys issaugoti");
          onAuthStateChanged(auth, authorizationFunc);
        })
        .catch((err) => {
          console.log("error saugant duomenis", err);
        });
      email.value = "";
      password.value = "";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log((errorCode, errorMessage));
    });
});

// Prisijungimas

logButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = logEmailInput.value.trim();
  const password = logPassInput.value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const loginTime = new Date();

      update(ref(database, "users/" + user.uid), {
        timestamp: `${loginTime}`,
      });
      logContainer.style.display = "none";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
onAuthStateChanged(auth, authorizationFunc);

// Atsijungimas

menuSignOutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  signOut(auth)
    .then(() => {
      panel.remove();
      menuRegBtn.style.display = "initial";
      menuLogBtn.style.display = "initial";
      menuSignOutBtn.style.display = "none";
    })
    .catch((error) => {});
});
