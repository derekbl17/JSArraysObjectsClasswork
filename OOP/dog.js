import { AnimalA } from "./animal.js";
export class Dog extends AnimalA {
  constructor(name, age, furColor, legCount) {
    super(name, age);
    this._furColor = furColor;
    this._legCount = legCount;
  }
}
