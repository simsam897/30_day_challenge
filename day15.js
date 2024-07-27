function outer() {
  let greet = "hello , good morning";
  function inner() {
    console.log(`${greet}`);
  }
  return inner();
}

outer();

function count() {
  let countIncrement = 0;
  return function () {
    countIncrement = countIncrement + 1;
    return countIncrement;
  };
}

let counter = count();

console.log(counter());
console.log(counter());
console.log(counter());

function idgenerator() {
  let uniqueId = 1121;
  return function () {
    uniqueId = uniqueId + 1;
    return uniqueId;
  };
}

let randy = idgenerator();

console.log(randy());
console.log(randy());
console.log(randy());

function greet() {
  let username = "sam";

  function morning() {
    console.log(` good morning ${username}`);
  }
  return morning();
}

greet();

const functionsArray = [];

for (let i = 0; i < 10; i++) {
  functionsArray[i] = (function (index) {
    return function () {
      console.log(index);
    };
  })(i);
}


functionsArray[0](); 
functionsArray[1]();
functionsArray[2](); 
functionsArray[3](); 

function createCollectionManager() {
  
  let items = [];

  return {
      
      addItem: function(item) {
          items.push(item);
          console.log(`${item} has been added.`);
      },
      
      
      removeItem: function(item) {
          const index = items.indexOf(item);
          if (index !== -1) {
              items.splice(index, 1);
              console.log(`${item} has been removed.`);
          } else {
              console.log(`${item} not found in the collection.`);
          }
      },
      
      
      listItems: function() {
          if (items.length === 0) {
              console.log('The collection is empty.');
          } else {
              console.log('Items in the collection:');
              items.forEach(item => console.log(item));
          }
      }
  };
}

const myCollection = createCollectionManager();
myCollection.addItem('Book');
myCollection.addItem('Pen');
myCollection.listItems(); 
myCollection.removeItem('Pen');
myCollection.listItems(); 
myCollection.removeItem('Pencil'); 





function memoize(fn) {
  const cache = {};

  return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
          console.log('Returning cached result for', args);
          return cache[key];
      } else {
          const result = fn(...args);
          cache[key] = result;
          console.log('Computing new result for', args);
          return result;
      }
  };
}


function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 



function memoize(fn) {
  const cache = {};

  return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key] !== undefined) {
          console.log('Returning cached result for', args);
          return cache[key];
      } else {
          const result = fn(...args);
          cache[key] = result;
          console.log('Computing new result for', args);
          return result;
      }
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(6)); 
