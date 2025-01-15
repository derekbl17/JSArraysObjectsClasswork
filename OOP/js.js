import { AnimalA } from "./animal.js";
import { malmal } from "./malmal.js";
import { dogUnit } from "./dogUnit.js";
import { Dog } from "./dog.js";
// class Animal {
//   constructor(name, age) {
//     this.animalName = name;
//     this.animalAge = age;
//   }
// }

// const someAnimal = new Animal("Reksas", 6);
// console.log(someAnimal);

// class Cat extends Animal {
//   constructor(name, age, legs, furColor) {
//     super(name, age); // super before all
//     this.animalLegsQnt = legs;
//     this.animalFurColor = furColor;
//   }
//   printInfo() {
//     console.log(
//       `I am ${this.animalName}, I am ${this.animalAge} yrs old, I have ${this.animalLegsQnt} legs and my fur color is ${this.animalFurColor}`
//     );
//   }
// }
// const kat = new Cat("Pukis", 3, 4, "Rainas");
// kat.printInfo();

// class Dog {
//   #dogBreed;
//   constructor() {
//     this._name = "Pluto";
//     this.#dogBreed = "Jorkshire terrier";
//   }
//   get breed() {
//     return this.#dogBreed;
//   }
//   set changeName(newName) {
//     this._name = newName;
//   }
// }

// const doggy = new Dog();
// console.log(doggy);
// console.log(doggy._name);
// console.log(doggy.breed);
// doggy.changeName = "Mars";
// console.log(doggy._name);

// class IDgenerator {
//   static currentID = 0;
//   static generateID() {
//     return ++this.currentID;
//   }
// }
// const IDgenOne = new IDgenerator();
// console.log(IDgenOne.currentID);
// console.log(IDgenerator.currentID);
// IDgenerator.generateID();
// console.log(IDgenerator.currentID);
// IDgenerator.generateID();
// console.log(IDgenerator.currentID);
// console.log(IDgenerator.generateID());
// console.log(IDgenerator.currentID);
//////////////////////////////////////////
// class School {
//   constructor(name, level, numberOfStudents) {
//     this._name = name;
//     this._level = level;
//     this._numberOfStudents = numberOfStudents;
//   }
//   get name() {
//     return this._name;
//   }
//   get level() {
//     return this._level;
//   }
//   get numberOfStudents() {
//     return this._numberOfStudents;
//   }
//   set numberOfStudents(numberOfStudents) {
//     if (typeof numberOfStudents === "Integral") {
//       this._numberOfStudents = numberOfStudents;
//     } else {
//       console.log("Invalid input: numberOfStudents must be set to a Number.");
//     }
//   }
//   quickFacts() {
//     console.log(
//       `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
//     );
//   }
//   static pickSubstituteTeacher(myA) {
//     console.log(myA[Math.floor(Math.random() * myA.length)]);
//   }
// }
// class PrimarySchool extends School {
//   constructor(name, numberOfStudents, pickupPolicy) {
//     super(name, "primary", numberOfStudents);
//     this._pickupPolicy = pickupPolicy;
//   }
//   get pickupPolicy() {
//     return this.pickupPolicy;
//   }
// }
// class HighSchool extends School {
//   constructor(name, numberOfStudents, sportsTeams) {
//     super(name, "High", numberOfStudents);
//     this._sportsTeams = sportsTeams;
//   }
//   get sportsTeams() {
//     return this._sportsTeams;
//   }
// }

// const lorraineHansbury = new PrimarySchool(
//   "Lorraine Hansbury",
//   514,
//   "Students must be picked up by a parent, guardian, or a family member over the age of 13."
// );
// console.log(lorraineHansbury);
// lorraineHansbury.quickFacts();
// School.pickSubstituteTeacher([
//   "Jamal Crawford",
//   "Lou Williams",
//   "J. R. Smith",
//   "James Harden",
//   "Jason Terry",
//   "Manu Ginobli",
// ]);

class Animal {
  static printText() {
    console.log("as esu gyvunas");
  }
}
Animal.printText();

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get printAll() {
    console.log(this._name);
    console.log(this._age);
  }
  print() {
    for (let i in this) {
      console.log(`${i} : ${this[i]}`);
    }
  }
}
const humanOne = new Person("Mike", 33);
humanOne.printAll;
console.log(humanOne);
humanOne.print(); /// Solution
//////////
class Student extends Person {
  constructor(name, age, subject, grades) {
    super(name, age);
    this._subject = subject;
    this._grades = grades;
  }
  studInfo() {
    const avg =
      this._grades.reduce(function (sum, value) {
        return sum + value;
      }, 0) / this._grades.length;
    console.log(avg);
    this._avg = avg;
  }
  printStu() {
    if (!this._avg) {
      this.studInfo();
    }
    let word = "";
    for (let i in this) {
      word += `${i}: ${this[i]}  `;
    }
    console.log(word);
  }
}
const studOne = new Student("Jake", 15, "Math", [7, 3, 2, 4, 6]);

studOne.printStu();

class Manager extends Person {
  constructor(name, age, wage) {
    super(name, age);
    this._wage = wage;
    this._fields = [];
  }
  isHappy() {
    this._wage < 1000 ? console.log(":(") : console.log(":)");
  }
  set setFields(newField) {
    this._fields.push(newField);
  }
  get getFields() {
    return this._fields;
  }
}
const managerOne = new Manager("Fred", 44, 3000);
managerOne.isHappy();
managerOne.setFields = "Vadyba";
managerOne.setFields = "Ukis";
console.log(managerOne.getFields);
/////////////
console.log(malmal._age);
console.log(malmal._name);

dogUnit.reciteInfo();
console.log("");
malmal.reciteInfo();
