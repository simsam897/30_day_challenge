// Task 1: Write a function that intentionally throws an error and use a try..catch to handle the error and log an appropriate message to the console.
function throwerror() {
  throw new Error("This is the intenal error ");
}
try {
  throwerror();
} catch (error) {
  console.log("An error occured", error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try...catch block to handle this error.
function divin(x, y) {
  try {
    if (y === 0) {
      throw new Error(" error ,denominator is zero");
    }
    const result = console.log(x / y);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
divin(8, 0);

// Task 3: Write a script that includes a try-catch block and a finally block. Log message in the try, catch, and finally blocks to observe the execution flow.
function vaild(age) {
  if (age < 0) {
    throw new Error("age cannot be negative");
  }

  console.log(age);
}

try {
  vaild(-1);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("execution of vaild function is done");
}

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try...catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function regular() {
  const isError = true;
  if (isError) {
    throw new CustomError("Someting went wrong");
  }
  console.log("success");
}

try {
  regular();
} catch (error) {
  if (error instanceof CustomError) {
    console.log(`custom error : ${error.message}`);
  }
}
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom erro using a try..catch block.
class validKaro extends Error {
  constructor(message) {
    super(message);
    this.name = "validKaro";
  }
}
function regular2(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new validKaro(" invaild input");
  }
  console.log("success");
}

try {
  regular2(20);
} catch (error) {
  if (error instanceof validKaro) {
    console.log(`validation error : ${error.message}`);
  }
}

// Task 6: Create a promise that randomly resolves, or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "deep", password: 123 });
    } else {
      reject("in promiseOne something went wrong");
    }
  }, 1000);
});

promiseOne
  .then(function (user) {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 7: Use a try...catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ name: "zsam", password: 123 });
    } else {
      reject("in promiseTwo error 404");
    }
  }, 1000);
});

async function consume() {
  try {
    const res = await promiseTwo;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consume();

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://api.invalid.url.com/invalid/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`error in fetching data ${error}`);
  });

// Task 9: use the fetch API to request data from an invalid URL within an async function and handle the error using try...catch log an appropriate error message.
async function getUser() {
  try {
    const response = await fetch("https://example.com/zsam");

    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Await the resolution of response.json()
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Invalid URL or error fetching data:", error.message);
  }
}

getUser();
