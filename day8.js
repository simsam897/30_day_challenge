//template litrals

let name = "dave";
let age = 29;
console.log(`my name is ${name}  and i am ${age} years old`);

console.log(`my name is ${name}.
and i am ${age} years old.`);

// destructuring

const numbers = [1, 2, 3, 4, 5, 6];

const [a, b, c] = numbers;

const [first, second, third, ...rest] = numbers;

console.log(first);
console.log(third);
console.log(first, ...rest);

const book = {
  bookName: "ikigai",
  authorName: "randy",
};

const { bookName, authorName } = book;

console.log(` ${bookName} , ${authorName}`);

// changing the key name of properties
const { bookName: title, authorName: author } = book;

console.log(`${title} , ${author}`);

const arr = [1, 2, 3, 4, 5];

const newArr = [...arr, 6, 7, 8, 9];

console.log(newArr);

function arbitrary(...num) {
  return num.reduce((sum, num) => sum + num, 0);
}

console.log(arbitrary(1, 2, 3, 4, 5));

function product(m, n = 1) {
  return m * n;
}

console.log(product(6, 4));
console.log(product(6));

let fullname = "deep";
let umar = 25;

const person = {
  fullname,
  umar,

  greetings() {
    console.log(
      `hellow , my name is ${this.fullname} and  i am ${this.umar} years old`
    );
  },

  ageIncrement(years = 1) {
    this.umar += years;
  },
};

console.log(person);

person.greetings();
person.ageIncrement(4);
person.greetings();

const propName1 = "key1";
const propValue1 = "sam";
const propName2 = "key2";
const propValue2 = "groot";

// Creating an object with multiple computed property names
const obj = {
  [propName1]: propValue1,
  [propName2]: propValue2,
};

console.log(obj);
