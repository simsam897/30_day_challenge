const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("asyn functin executed");

    resolve({ naam: "samual" });
  }, 2000); //
});

promiseOne.then(function () {
  console.log("promise is resolved");
});

promiseOne.catch(function () {
  console.log("promise is rejected");
});

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "sam", password: "123" });
    } else {
      reject("something went wrong");
    }
  }, 2000);
});
promiseTwo
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promiseFour is done");
  });

// Simulating fetching data from a server
function fetchData(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, delay);
  });
}

fetchData("Fetching user data...", 1000)
  .then(() => fetchData("Fetching posts...", 1000))
  .then(() => fetchData("Fetching comments...", 1000))
  .then(() => fetchData("Fetching likes...", 1000))
  .then(() => {
    console.log("All data fetched successfully.");
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "deep", password: "123" });
    } else {
      reject("something went wrong five");
    }
  }, 1000);
});

async function consoumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consoumePromiseFive();

const promiseSix = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ courseName: "javascript", instructor: "chaiCode" });
    } else {
      reject("something went wrong in promise six");
    }
  }, 1000);
});

async function consumedPromiseSix() {
  try {
    const res = await promiseSix;
    console.log(res);
  } catch (error) {
    console.log("E", error);
  }
}

consumedPromiseSix();

// async function getUser() {
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/hiteshchoudhary"
//     );

//     console.log(response);

//     // const data = response.json();
//     // console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUser();

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

Promise.all([promiseOne, promiseTwo, promiseFive]).then((values) => {
  console.log(values);
});

Promise.race([promiseOne, promiseTwo, promiseFive]).then((values) => {
  // promiseFive will be executed because it fast
  console.log(values);
});
