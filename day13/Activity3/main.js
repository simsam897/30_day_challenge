// Importing the entire module as an object
import * as task5 from "./task5.js";

// Using the properties of the module
console.log("PI:", task5.PI);
console.log("E:", task5.E);

console.log("Add 2 + 3:", task5.add(2, 3));
console.log("Subtract 5 - 2:", task5.subtract(5, 2));
console.log("Multiply 4 * 3:", task5.multiply(4, 3));
console.log("Divide 10 / 2:", task5.divide(10, 2));

try {
  console.log("Divide 10 / 0:", task5.divide(10, 0));
} catch (error) {
  console.error("Error:", error.message);
}
