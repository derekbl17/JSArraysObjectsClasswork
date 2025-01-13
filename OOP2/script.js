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

const catBtn = document.getElementById("cat");
const catSubBtn = document.getElementById("submitCat");
const fishBtn = document.getElementById("fish");
const fishSubBtn = document.getElementById("submitFish");
const birdBtn = document.getElementById("bird");
const birdSubBtn = document.getElementById("submitBird");
const addedArea = document.getElementById("added");
const addedArray = [];
let cnt = 0;

function addCat() {
  const cName = document.getElementById("catName").value;
  const cAge = document.getElementById("catAge").value;
  const furC = document.getElementById("furColor").value;
  const furT = document.getElementById("furType").value;
  if ((cName, cAge, furC, furT)) {
    addedArray[cnt] = new Cats(cName, cAge, furC, furT);
    displayAnimal();
    cnt++;
    document.getElementById("catName").value = "";
    document.getElementById("catAge").value = "";
    document.getElementById("furColor").value = "";
    document.getElementById("furType").value = "";
  } else alert("invalid input");
}

function addFish() {
  const fName = document.getElementById("nameF").value;
  const fAge = document.getElementById("ageF").value;
  const fScaleColor = document.getElementById("scaleColor").value;
  const fWeight = document.getElementById("weight").value;
  if ((fName, fAge, fScaleColor, fWeight)) {
    addedArray[cnt] = new Fish(fName, fAge, fScaleColor, fWeight);
    displayAnimal();
    cnt++;
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
    displayAnimal();
    cnt++;
    document.getElementById("nameB").value = "";
    document.getElementById("ageB").value = "";
    document.getElementById("featherColor").value = "";
    document.getElementById("beakType").value = "";
  } else alert("invalid input");
}
window.addEventListener("load", (e) => {
  catBtn.click();
});

catBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Zzz");
  document.getElementById("fishField").style = "display:none;";
  document.getElementById("birdField").style = "display:none;";
  document.getElementById("catField").style = "display:block;";
});

catSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("z");
  addCat();
  console.log(addedArray);
});

fishBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Zzz");
  document.getElementById("fishField").style = "display:block;";
  document.getElementById("birdField").style = "display:none;";
  document.getElementById("catField").style = "display:none;";
});

fishSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addFish();
});

birdBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Zzz");
  document.getElementById("fishField").style = "display:none;";
  document.getElementById("birdField").style = "display:block;";
  document.getElementById("catField").style = "display:none;";
});

birdSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBird();
});

function displayAnimal() {
  const form = document.createElement("form");
  form.id = "addedForm";
  for (let k in addedArray[cnt]) {
    const pEl = document.createElement("p");
    pEl.innerText = `${k}: ${addedArray[cnt][k]}`;
    form.append(pEl);
  }
  addedArea.append(form);
}
