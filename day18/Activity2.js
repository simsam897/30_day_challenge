function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.log(`Target ${target} found at index ${i}`);
      return i; // Return the index where the target is found
    }
  }
  console.log(`Target ${target} not found`);
  return -1; // Return -1 if the target is not found
}

// Example usage
const rocket = [10, 20, 30, 40, 50];
const target = 30;

linearSearch(rocket, target);

function binarySearch(array, aim) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === aim) {
      console.log(`Aim ${aim} found at index ${middle}`);
      return middle; // Return the index where the aim is found
    }

    if (array[middle] < aim) {
      left = middle + 1; // Narrow the search to the right half
    } else {
      right = middle - 1; // Narrow the search to the left half
    }
  }

  console.log(`Aim ${aim} not found`);
  return -1; // Return -1 if the aim is not found
}

// Example usage
const ben = [10, 20, 30, 40, 50];
const aim = 30;

binarySearch(ben, aim);
