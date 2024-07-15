let number = 0;
if (number > 0) {
  console.log("number is positive");
} else if (number < 0) {
  console.log("number is negative");
} else if (number == 0) {
  console.log(" entered number is zero");
}
let age = 55;
if (age >= 18) {
  console.log("person is eligable to vote");
} else {
  console.log("person is not eligiable to vote");
}

let x = 200;
let y = 300;
let z = 400;

let largestNum;

if (x > y) {
  if (x > z) {
    largestNum = x;
  } else {
    largestNum = z;
  }
} else {
  if (y > z) {
    largestNum = y;
  } else {
    largestNum = z;
  }
}

console.log("largest number", largestNum);

function dayName(day) {
  switch (day) {
    case 1:
      return "sunday";
      break;

    case 2:
      return "monday";
      break;

    case 3:
      return "tuesday";
      break;

    case 4:
      return "wednesday";
      break;

    case 5:
      return "thursday";
      break;

    case 6:
      return "friday";
      break;

    case 7:
      return "saturday";
      break;

    default:
      return "eror";
      break;
  }
}

const day = dayName(5);

console.log(day);

function getGrade(score) {
  switch (true) {
    case score > 90:
      return "outstanding";

      break;

    case score >= 75:
      return "grade A";

      break;

    case score > 60:
      return "grade B";

      break;

    case score <= 60:
      return "grade C";

      break;

    case score < 45:
      return " grade D";

      break;

    case score < 40:
      return " grade E";

      break;

    case score < 35:
      return " grade F";

      break;

    default:
      return "enter vaild number";
      break;
  }
}
let grade = getGrade(87);
console.log(grade);

let num = 10;

let result = num % 2 == 0 ? "even" : "odd";

console.log(result);

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0; // True if divisible by 400, otherwise false
    } else {
      return true; // Divisible by 4 and not by 100
    }
  } else {
    return false; // Not divisible by 4
  }
}

let year = 2024;
if (isLeapYear(year)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
