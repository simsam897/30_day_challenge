const arr = [1, 2, 3, 4, 5];

console.log(arr);

console.log(` ${arr[0]} ${arr[4]}`);

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

const newArr = [1, 3, 5, 7, 9, 10];

const result = newArr.map((num) => num * 2);

const result2 = newArr.filter((i) => i % 2 == 0);

const result3 = newArr.reduce((m, n) => (sum = m + n));

console.log(result);
console.log(result2);
console.log(result3);

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log("by for loop", numbers[i]);
}

const hence = numbers.forEach((n) => console.log("using for each", n));

console.log(hence);

const dimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(dimensionalArray);

console.log(dimensionalArray[0][2]);
console.log(dimensionalArray[2][0]);
