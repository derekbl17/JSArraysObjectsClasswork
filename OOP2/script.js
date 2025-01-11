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
  const cName=document.getElementById("catName").value
  const cAge=document.getElementById("catAge").value
  const furC=document.getElementById("furColor").value
  const furT=document.getElementById("furType").value
  if (cName,cAge,furC,furT){
      addedArray[cnt] = new Cats(cName,cAge,furC,furT);
  displayAnimal()
  cnt++;}
  else alert("invalid input")
  
}
// change all add functions to work like addCat()
function addFish() {
  addedArray[cnt] = new Fish(
    document.getElementById("nameF").value,
    document.getElementById("ageF").value,
    document.getElementById("scaleColor").value,
    document.getElementById("weight").value
  );
  displayAnimal()
  cnt++;
}
function addBird() {
  addedArray[cnt] = new Birds(
    document.getElementById("nameB").value,
    document.getElementById("ageB").value,
    document.getElementById("featherColor").value,
    document.getElementById("beakType").value
  );
  displayAnimal()
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

fishSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addFish()
})

birdBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Zzz");
  addBird()
  document.getElementById("fishField").style = "display:none;";
  document.getElementById("birdField").style = "display:block;";
  document.getElementById("catField").style = "display:none;";
});

birdSubBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBird()
});

function displayAnimal(){
    for (let k in addedArray[cnt]){
      const form = document.createElement('form')
      form.append(document.createElement('p').innerText=`${k}: ${addedArray[cnt][k]}`)
      addedArea.append(form)
    }
  }
