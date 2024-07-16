for (let num = 1; num <= 10; num++) {
  console.log(num);
}

for (let num = 1; num <= 10; num++) {
  console.log(num * 5);
}

let num = 1;
let sum = 0;
while (num <= 10) {
  sum += num;

  num++;
}
console.log("total sum of numbers 1 to 10", sum);

let total = 10;
while (total >= 1) {
  console.log(total);
  i--;
}

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }

  let fact = 1;
  let i = n;

  do {
    fact *= i;
    i--;
  } while (i > 0);

  return fact;
}

// Example usage
let number = -1; // Change this number to calculate the factorial of a different number
console.log(`The factorial of ${number} is ${factorial(number)}`);

function printRightAngledTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// Example usage
printRightAngledTriangle(5);
