function factorial(num) {
  if (num < 0) {
    console.log(`factoial does not define the negative numbers`);
  }
  if (num === 0 || num === 1) {
    console.log(`factorial ${num} is 1`);
    return 1;
  } else {
    const result = num * factorial(num - 1);
    console.log(`factorial (${num} )= ${result}`);
    return result;
  }
}

const num = 8;

console.log(`The factorial of ${num} is ${factorial(num)}`);

function fibonacci(n) {
  throw new Error("Fibonacci is not defined for negative numbers");

  let a = 0,
    b = 1,
    temp;
  if (n === 0) {
    return a;
  }
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

const n = 6;
console.log(`The ${n}th Fibonacci number is ${fibonacci(n)}`);

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([15, 13, 67, 87, 88]));
console.log(sumArray([14, 76, 98, 65, 43, 99]));

function logSum(arr) {
  console.log(`The sum of [${arr}] is ${sumArray(arr)}`);
}

console.log(logSum([1, 2, 3, 4, 5]));
console.log(logSum([15, 13, 67, 87, 88]));
console.log(logSum([14, 76, 98, 65, 43, 99]));

function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.max(arr[0], findMax(arr.slice(1)));
}

console.log(findMax([1, 2, 3, 4, 5]));

function logMax(arr) {
  console.log(`The maximum element in [${arr}] is ${findMax(arr)}`);
}

logMax([1, 2, 3, 4, 5]);

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("!gnirts esrever"));
console.log(reverseString("a"));
console.log(reverseString(""));

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("level"));

function logPalindromeCheck(str) {
  const result = isPalindrome(str);
  console.log(`Is "${str}" a palindrome? ${result}`);
}

logPalindromeCheck("racecar");
logPalindromeCheck("level");

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  }
  return binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([10, 20, 30, 40, 50], 40));

function logBinarySearch(arr, target) {
  const result = binarySearch(arr, target);
  console.log(`The index of ${target} in [${arr}] is ${result}`);
}

logBinarySearch([1, 2, 3, 4, 5], 3);
logBinarySearch([10, 20, 30, 40, 50], 40);

function countOccurrences(arr, target, index = 0) {
  if (index >= arr.length) {
    return 0;
  }
  const match = arr[index] === target ? 1 : 0;
  return match + countOccurrences(arr, target, index + 1);
}

console.log(countOccurrences([1, 2, 3, 4, 5, 3, 3], 3));
console.log(countOccurrences([10, 20, 30, 40, 50, 20], 20));
console.log(countOccurrences([-1, -2, -3, -4, -5], -3));
console.log(countOccurrences([1, 2, 3, 4, 5], 6));
console.log(countOccurrences([], 1));
console.log(countOccurrences([1, 1, 1, 1, 1], 1));

function logCountOccurrences(arr, target) {
  const result = countOccurrences(arr, target);
  console.log(
    `The number of occurrences of ${target} in [${arr}] is ${result}`
  );
}

logCountOccurrences([1, 2, 3, 4, 5, 3, 3], 3);
logCountOccurrences([10, 20, 30, 40, 50, 20], 20);
logCountOccurrences([-1, -2, -3, -4, -5], -3);
logCountOccurrences([1, 2, 3, 4, 5], 6);
logCountOccurrences([], 1);
logCountOccurrences([1, 1, 1, 1, 1], 1);
