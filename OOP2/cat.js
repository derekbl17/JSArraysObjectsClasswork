import { Animal } from "./script.js";
export class Cats extends Animal {
  constructor(name, age, furColor, furType) {
    super(name, age);
    this.furColor = furColor;
    this.furType = furType;
  }
}
