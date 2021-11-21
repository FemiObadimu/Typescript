// Dynamic Types (any)
var age = 25;
age = true;
console.log(age);
age = " hello";
console.log(age);
age = 38;
console.log(age);
var mixed = [];
mixed.push(4);
console.log(mixed);
mixed.push("ooohboy");
console.log(mixed);
mixed.push(true);
console.log(mixed);
var techies;
var techgirls;
techies = {
    name: "emmy",
    age: 30
};
console.log(techies);
techies = {
    name: true,
    age: "idontknow"
};
console.log(techies);
techgirls = {
    name: "hannah",
    portfolio: "senior software dev"
};
console.log(techgirls);
techgirls = {
    name: null,
    portfolio: 47
};
console.log(techgirls);
// All above will not throw an error because of the any type
// Functions
var greeting = function () {
    console.log("Hello World");
};
greeting();
// or
var greet;
greet = function () {
    console.log("Hey");
};
greet();
var add = function (a, b, c) {
    return a + b;
    // c becomes optional because of ?
};
console.log(add(2, 45));
var sub = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(c);
    return a - b;
};
console.log(sub(45, 30, "34"));
// inferred function
var mul = function (a, b) {
    return a * b;
};
var result = mul(2, 4);
// return result is a number
// Type Aliases
var logDetails = function (uid, item) {
    console.log("".concat(item, " has  uid of ").concat(uid));
};
var greets = function (user) {
    console.log("".concat(user.name, " says Yes"));
};
var logDetails2 = function (uid, item) {
    console.log("".concat(item, " has  uid of ").concat(uid));
};
var greets2 = function (user) {
    console.log("".concat(user.name, " says Yes"));
};
