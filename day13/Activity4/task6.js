


import _ from "lodash";


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;
const chunkedArray = _.chunk(array, chunkSize);

console.log("Original Array:", array);
console.log(`Array Chunked into Size ${chunkSize}:`, chunkedArray);
