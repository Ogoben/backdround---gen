class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
  introduce() {
    console.log(`I am ${this.name} the animal. I am ${this.type} 
        and I am ${this.color} in color`);
  }
}

class Mammal extends Animal {
  constructor(name, type, color, sound) {
    super(name, type, color);
    this.sound = sound;
  }
  warmBlooded() {
    console.log(`A ${this.type} is a warm blooded Animal`);
  }
  makeSound() {
    console.log(`A cow makes the sound ${this.sound}.`);
  }
}

const cow = new Mammal("Cow", "Mammal", "Black and White", "Moo");

const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

console.log(startLine);
console.log(turtle.padStart(7));
console.log(rabbit.padStart(7));

// let obj = {
//   my: "name",
//   is: "Rudolf",
//   the: "raindeer",
// };

// Object.entries(obj)
//   .map((value) => value.join(" "))
//   .join(" ");
