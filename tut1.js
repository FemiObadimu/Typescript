// Strings
var character = "femi";
// Numbers
var aged = 30;
var circ = function (diameter) {
    return Math.PI * diameter;
};
console.log(circ(300));
// Boolean
var came = true;
came = false;
came = null;
// Arrays
var food = ["rice", "beans", "plantain", "eggs", "spag"];
food.push("yam");
// this is impossible because the array food has only string values
// food.push(2)
food.push("true"); //string true
console.log(food);
//Objects
var femi = {
    name: "will",
    age: 16,
    male: true
};
// you cannot do the following
// femi cannot be extensible
// femi.skills= ['coding', 'writing']
// femi.age = '16'
// femi.name = false;
var mike;
var age;
var isloggedin;
// age = '23'
age = 30;
// isloggedin = 'yes'
isloggedin = null;
// Arrays
var brothers = [];
brothers.push("femi");
console.log(brothers);
// union types in variables
var uid;
uid = "yes";
uid = 30;
// union types in array
var mixed = [];
mixed.push("hello");
mixed.push(300);
mixed.push(true);
console.log(mixed);
// union types in Objects
var firstWinner;
firstWinner = {
    name: "john",
    "class": 23,
    clue: true
};
var secondWinner;
secondWinner = {
    name: "will",
    "class": 90,
    clue: false
};
