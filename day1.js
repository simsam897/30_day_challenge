// # VARIABLES

var num = 18;
console.log(num);

let word = "punjab";
console.log(word);

// constant declaration

const isTruth = true;
console.log(isTruth);

// # DATA TYPES

// #PRIMITIVE DATA TYPES

let num2 = 11;
console.log(num2); // 11

let city = "chandigarh";
console.log(city); //chandigarh

let isTrue = false;
console.log(isTrue); // false

const numbers = 456563454545n;
console.log(typeof numbers); //bigint

// NON PRIITIVE DATA TYPES

// Array , Object , function

const person = {
  name: "groot",
  age: "100",
};

console.log(typeof person);  // object

const sportsGames = ["crcket", "football", "basketball", "badminton"];

console.log(typeof sportsGames); // object
console.log(Array.isArray(sportsGames)); // true
console.log(sportsGames instanceof Array); // true

const glaxy = function () {
  console.log("hello");
};

glaxy();

console.log(typeof glaxy === "function"); // true
console.log(glaxy instanceof Function); // true

// #REASSIGNING

let initialValue = 30;
console.log(initialValue);

initialValue = 40; // reassigning the value
console.log(initialValue); // 40

const orignalValue = 10;

// orignalValue = 20;  // error , cannot reassign the values
