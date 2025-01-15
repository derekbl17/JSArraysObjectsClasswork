import { Animal } from "./script.js";
export class Birds extends Animal {
  constructor(name, age, featherColor, beakType) {
    super(name, age);
    this.featherColor = featherColor;
    this.beakType = beakType;
  }
}
