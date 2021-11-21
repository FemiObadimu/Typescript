// Dynamic Types (any)

let age: any = 25;

age = true;
console.log(age);
age = " hello";
console.log(age);
age = 38;
console.log(age);

let mixed: any[] = [];

mixed.push(4);
console.log(mixed);
mixed.push("ooohboy");
console.log(mixed);
mixed.push(true);
console.log(mixed);

let techies: { name: any; age: any };
let techgirls: { name: any; portfolio: any };

techies = {
  name: "emmy",
  age: 30,
};

console.log(techies);

techies = {
  name: true,
  age: "idontknow",
};

console.log(techies);

techgirls = {
  name: "hannah",
  portfolio: "senior software dev",
};

console.log(techgirls);

techgirls = {
  name: null,
  portfolio: 47,
};

console.log(techgirls);

// All above will not throw an error because of the any type

// Functions

let greeting = () => {
  console.log("Hello World");
};

greeting();

// or

let greet: Function;
greet = () => {
  console.log("Hey");
};

greet();

const add = (a: number, b: number, c?: number | string) => {
  return a + b;
  // c becomes optional because of ?
};

console.log(add(2, 45));

const sub = (a: number, b: number, c: number | string = 10) => {
  console.log(c);
  return a - b;
};

console.log(sub(45, 30, "34"));

// inferred function
const mul = (a: number, b: number): number => {
  return a * b;
};

let result = mul(2, 4);
// return result is a number

// Type Aliases

const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has  uid of ${uid}`);
};

const greets = (user: { name: string; uid: string | number }) => {
  console.log(`${user.name} says Yes`);
};

type strornum = string | number;
type obj = { name: string; uid: strornum };

const logDetails2 = (uid: strornum, item: string) => {
  console.log(`${item} has  uid of ${uid}`);
};

const greets2 = (user: obj) => {
  console.log(`${user.name} says Yes`);
};


