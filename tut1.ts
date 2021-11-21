// Strings
let character = "femi";

// Numbers

let aged = 30;

const circ = (diameter) => {
  return Math.PI * diameter;
};
console.log(circ(300));

// Boolean
let came = true;
came = false;
came = null;

// Arrays

let food = ["rice", "beans", "plantain", "eggs", "spag"];

food.push("yam");

// this is impossible because the array food has only string values
// food.push(2)
food.push("true"); //string true

console.log(food);

//Objects

let femi = {
  name: "will",
  age: 16,
  male: true,
};

// you cannot do the following
// femi cannot be extensible
// femi.skills= ['coding', 'writing']
// femi.age = '16'
// femi.name = false;

let mike: string;
let age: number;
let isloggedin: boolean;

// age = '23'
age = 30;

// isloggedin = 'yes'
isloggedin = null;

// Arrays
let brothers: string[] = [];

brothers.push("femi");
console.log(brothers);

// union types in variables
let uid: string | number;
uid = "yes";
uid = 30;

// union types in array

let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(300);
mixed.push(true);
console.log(mixed);

// union types in Objects
let firstWinner: object;

firstWinner = {
  name: "john",
  class: 23,
  clue: true,
};

let secondWinner: {
  name: string;
  class: number;
  clue: boolean;
};

secondWinner = {
  name: "will",
  class: 90,
  clue: false,
};
