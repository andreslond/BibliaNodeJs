//Objects
console.log();
console.log("Objects examples...");
class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const person = new Person("Felipe");
let personName = person.getName();
console.log(personName);

// Collections

// Array
console.log();
console.log("Arrays examples...");
const fruits = [
  "apple",
  "melon",
  "mango",
  function () {
    console.log("Hola");
  },
];

console.log(fruits[0]);

// Set
console.log();
console.log("Sets examples...");
const teachers = new Set();
teachers.add("francis");
teachers.add("jack");
console.log(teachers.size);
teachers.add("francis");
console.log(teachers.size);

// Map
console.log();
console.log("Maps v");
const students = new Map();
students.set("one", 1);

console.log(students.get("one"));

// Functions
console.log();
console.log("Functions examples...");

function greet() {
    console.log("Hi");
}

console.log(greet());

const functExpression = function(name) {
    console.log(`Do something with the ${name}`);
}

console.log(functExpression());


