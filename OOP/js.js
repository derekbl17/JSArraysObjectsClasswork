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

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(numberOfStudents) {
    if (typeof numberOfStudents === "Integral") {
      this._numberOfStudents = numberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  static pickSubstituteTeacher(myA) {
    console.log(myA[Math.floor(Math.random() * myA.length)]);
  }
}
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this.pickupPolicy;
  }
}
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "High", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
console.log(lorraineHansbury);
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);
