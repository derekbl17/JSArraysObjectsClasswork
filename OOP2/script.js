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
const birdBtn = document.getElementById("bird");
const addedArea = document.getElementById("added");
const addedArray = [];
let cnt = 0;
function addCat() {
  addedArray[cnt] = new Cats(
    document.getElementById("catName").value,
    document.getElementById("catAge").value,
    document.getElementById("furColor").value,
    document.getElementById("furType").value
  );
  cnt++;
}
function addFish() {
  addedArray[cnt] = new Fish(
    document.getElementById("catName").value,
    document.getElementById("catAge").value,
    document.getElementById("furColor").value,
    document.getElementById("furType").value
  );
  cnt++;
}
function addBird() {
  addedArray[cnt] = new Birds(
    document.getElementById("catName").value,
    document.getElementById("catAge").value,
    document.getElementById("furColor").value,
    document.getElementById("furType").value
  );
  cnt++;
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
birdBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Zzz");
  document.getElementById("fishField").style = "display:none;";
  document.getElementById("birdField").style = "display:block;";
  document.getElementById("catField").style = "display:none;";
});
