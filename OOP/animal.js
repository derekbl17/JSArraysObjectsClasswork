"use strict";
export class AnimalA {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  addAge() {
    ++this._age;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  reciteInfo() {
    for (let i in this) {
      console.log(`${i} : ${this[i]}`);
    }
  }
}
