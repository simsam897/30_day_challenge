const rotateArray = (arr, k) => {
  let n = arr.length;
  k = k % n;
  let rotated = [];
  for (let i = 0; i < n; i++) rotated[(i + k) % n] = arr[i];
  for (let i = 0; i < n; i++) arr[i] = rotated[i];
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Original array: ", arr);
rotateArray(arr, k);
console.log("Rotated array: ", arr);

mergeArrays = (arr1, arr2) => {
  let final = [],
    i = 0;
  j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      final.push(arr1[i]);
      i++;
    } else {
      final.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    final.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    final.push(arr2[j]);
    j++;
  }
  return final;
};

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
console.log("Merged array: ", mergeArrays(arr1, arr2));
