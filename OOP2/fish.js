import { Animal } from "./script.js";
export class Fish extends Animal {
  constructor(name, age, scaleColor, weight) {
    super(name, age);
    this.scaleColor = scaleColor;
    this.weight = weight;
  }
}
