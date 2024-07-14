// #ARITHMATIIC OPERATORSS

const a = 10;
const b = 20;
const result = a + b; // adding two numbers
const sub = b - a; // subtracting two numbers
const mul = a * b; // multiplying two numbers
const div = b / a; // division of two numbers

console.log(result); //30
console.log(sub); //10
console.log(mul); //200
console.log(div); //2

// Rmainder

let num1 = 2;
let num2 = 8;

nateeza = num2 % num1;

console.log("remainder is", nateeza); // rmainder will be  0;

// # ASSIGNMENT OPERATORS

let x = 2;

let y = 3;

x = x + y;

y = y - x;

console.log(x); //5
console.log(y); // -2

// #comaprision operators

let m = 7;
let n = 3;

console.log(m > n); // true
console.log(n < m); // true

console.log(m >= n); //true
console.log(m <= n); //false

let rocket = 1;
let rocket2 = "1";

// if (rocket == rocket2) {
//   console.log("rocket is equals to rocket2");
// }

if (rocket === rocket2) {
  console.log("rocket is euals to rocket2");
} else {
  console.log("rocket is not euals to rocket2");
}

// #LOGICAL OPERATORS

const answ1 = 10;
const answ2 = 12;

if (answ1 % 2 == 0 && answ2 % 2 == 0) {
  console.log("both answers are even values");
} else {
  console.log("not even values");
}

let i = 4;
let j = 3;

if (i % 2 == 0 || j % 2 == 0) {
  console.log("conditon satisfied");
} else {
  console.log("condition not satisfied");
}

let isUserLoggin = true;

if (!isUserLoggin) {
  console.log("user not login");
} else {
  console.log("user is login");
}

// or

let d = !true;
console.log("answer is ", d);



// #Ternary Operator

let number = 6;

console.log(number % 2 == 0 ? "even" : odd);
