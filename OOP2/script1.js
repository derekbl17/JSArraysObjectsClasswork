import { Cats } from "./cat.js";
import { Fish } from "./fish.js";
import { Birds } from "./bird.js";
export class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const fish = new Fish("z", "zz", 1, 1);
print(fish);
