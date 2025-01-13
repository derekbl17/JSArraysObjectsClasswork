class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Cats extends Animal {
  constructor(name, age, furColor, furType) {
    super(name, age);
    this.furColor = furColor;
    this.furType = furType;
  }
}
class Fish extends Animal {
  constructor(name, age, scaleColor, weight) {
    super(name, age);
    this.scaleColor = scaleColor;
    this.weight = weight;
  }
}
class Birds extends Animal {
  constructor(name, age, featherColor, beakType) {
    super(name, age);
    this.featherColor = featherColor;
    this.beakType = beakType;
  }
}

const catBtn = document.getElementById("cat"); // cat form select
const catSubBtn = document.getElementById("submitCat"); // cat form submit
const fishBtn = document.getElementById("fish"); // fish form select
const fishSubBtn = document.getElementById("submitFish"); // fish form submit
const birdBtn = document.getElementById("bird"); // bird form select
const birdSubBtn = document.getElementById("submitBird"); // bird form submit
const addedArea = document.getElementById("added"); // section under form for submitted pets
const addedArray = JSON.parse(localStorage.getItem("pets")) || []; // array for created objects(submitted pets)
let cnt = 0; // array index counter
while (addedArray.length > cnt) {
  displayAnimal(1);
}

// creates cat object
function addCat() {
  const cName = document.getElementById("catName").value;
  const cAge = document.getElementById("catAge").value;
  const furC = document.getElementById("furColor").value;
  const furT = document.getElementById("furType").value;
  // check if no empty inputs
  if ((cName, cAge, furC, furT)) {
    addedArray[cnt] = new Cats(cName, cAge, furC, furT);
    displayAnimal(1);
    // resets input values after submission
    document.getElementById("catName").value = "";
    document.getElementById("catAge").value = "";
    document.getElementById("furColor").value = "";
    document.getElementById("furType").value = "";
    // if empty input, alerts
  } else alert("invalid input");
}

function addFish() {
  const fName = document.getElementById("nameF").value;
  const fAge = document.getElementById("ageF").value;
  const fScaleColor = document.getElementById("scaleColor").value;
  const fWeight = document.getElementById("weight").value;
  if ((fName, fAge, fScaleColor, fWeight)) {
    addedArray[cnt] = new Fish(fName, fAge, fScaleColor, fWeight);
    displayAnimal(1);
    document.getElementById("nameF").value = "";
    document.getElementById("ageF").value = "";
    document.getElementById("scaleColor").value = "";
    document.getElementById("weight").value = "";
  } else alert("invalid input");
}
function addBird() {
  const bName = document.getElementById("nameB").value;
  const bAge = document.getElementById("ageB").value;
  const bFeatherColor = document.getElementById("featherColor").value;
  const bBeakType = document.getElementById("beakType").value;
  if ((bName, bAge, bFeatherColor, bBeakType)) {
    addedArray[cnt] = new Birds(bName, bAge, bFeatherColor, bBeakType);
    displayAnimal(1);
    document.getElementById("nameB").value = "";
    document.getElementById("ageB").value = "";
    document.getElementById("featherColor").value = "";
    document.getElementById("beakType").value = "";
  } else alert("invalid input");
}
// on page load select cat form
window.addEventListener("load", (e) => {
  catBtn.click();
});

catBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("catField").style = "display:block;";
  document.getElementById("fishField").style = "display:none;";
  document.getElementById("birdField").style = "display:none;";
  catBtn.style = "background:#684db9;";
  fishBtn.style = "";
  birdBtn.style = "";
});

catSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addCat();
});

fishBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("catField").style = "display:none;";
  document.getElementById("fishField").style = "display:block;";
  document.getElementById("birdField").style = "display:none;";
  catBtn.style = "";
  fishBtn.style = "background:#684db9;";
  birdBtn.style = "";
});

fishSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addFish();
});

birdBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("catField").style = "display:none;";
  document.getElementById("fishField").style = "display:none;";
  document.getElementById("birdField").style = "display:block;";
  catBtn.style = "";
  fishBtn.style = "";
  birdBtn.style = "background:#684db9;";
});

birdSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBird();
});

// add to section last submitted animal
function displayAnimal(param = 0) {
  const form = document.createElement("form");
  form.id = "addedForm";
  const remButton = document.createElement("button");
  const targetIndex = cnt;
  remButton.innerText = "remove";
  remButton.addEventListener("click", (e) => {
    cnt--;
    e.preventDefault();
    addedArray.splice(targetIndex, 1);
    console.log(addedArray);
    displayAnimal();
    location.reload();
  });
  for (let k in addedArray[cnt]) {
    const pEl = document.createElement("p");
    pEl.innerText = `${k}: ${addedArray[cnt][k]}`;
    form.append(pEl);
  }
  form.append(remButton);
  param == 1 ? addedArea.append(form) : 0;
  localStorage.setItem("pets", JSON.stringify(addedArray));
  cnt++;
}
