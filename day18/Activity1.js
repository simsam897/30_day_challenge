function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Example array
let arr = [64, 34, 25, 12, 22, 11, 90];

// Perform bubble sort
bubbleSort(arr);

// Log the sorted array
console.log("Sorted array is:", arr);

function selectionSort(ARR) {
  let n = ARR.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the remaining unsorted ARRay
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (ARR[j] < ARR[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    if (minIndex != i) {
      let temp = ARR[i];
      ARR[i] = ARR[minIndex];
      ARR[minIndex] = temp;
    }
  }
}

// Example ARRay
let ARR = [64, 34, 25, 12, 22, 11, 90];

// Perform selection sort
selectionSort(ARR);

// Log the sorted ARRay
console.log("Sorted ARRay with selection sort is:", ARR);



function quickSort(groot) {
  if (groot.length <= 1) {
      return groot;
  }

  // Choose the pivot (we'll use the last element as the pivot)
  let pivot = groot[groot.length - 1];
  let left = [];
  let right = [];
  
  // Partition the array into two halves
  for (let i = 0; i < groot.length - 1; i++) {
      if (groot[i] < pivot) {
          left.push(groot[i]);
      } else {
          right.push(groot[i]);
      }
  }

  // Recursively apply quickSort to the partitions
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example array
let groot = [64, 34, 25, 12, 22, 11, 90];

// Perform quick sort
let sortedGroot = quickSort(groot);

// Log the sorted array
console.log("Sorted array is:", sortedGroot);

