function oddEven(num) {
  if (num % 2 == 0) {
    console.log(` number ${num} is even`);
  } else {
    console.log(`number ${num} is odd`);
  }
}

oddEven(11);

function calculateSquare(number) {
  square = Math.pow(number, 2);
  return square;
}

let result = calculateSquare(6);
console.log(result);

const maxi = (a, b) => {
  return a > b ? a : b;
};

let hence = maxi(4, 6);

console.log(hence);

const twoStrings = (x, y) => {
  return x + y;
};

let combine = twoStrings("sam", "deep");
console.log(combine);

let sum = (m, n) => {
  return m + n;
};

let total = sum(3, 4);

console.log(total);

let check = function (z) {
  return z.includes("a") ? true : false;
};

let final = check("sam");

console.log(final);

function product(para1, para2 = 2) {
  return para1 * para2;
}

console.log(product(5));

function greet(name, age = 25) {
  return `good mornnig and happy birthday ${name} and you are today getting ${age} years old`;
}

console.log(greet("sam"));

function high(fn, num) {
  for (let i = 0; i < num; i++) {
    fn();
  }
}

function sayHello() {
  console.log("Hello!");
}

high(sayHello, 4);

function Functions(fn1, fn2, value) {
  const result1 = fn1(value);
  const result2 = fn2(result1);
  return result2;
}

function add(x) {
  return x + 5;
}

function multiply(x) {
  return x * 2;
}

const value = 4;
const finalResult = Functions(add, multiply, value);
console.log(finalResult);
