let book = {
  title: "ikigai",
  author: "grinccha",
  year: 2020,

  getGreeting: function () {
    return "Hello, the book  name is " + this.title;
  },

  updateYear: function (editionYear) {
    this.year = editionYear;
  },

  getTitleAndYear: function () {
    return `${this.title} was published in ${this.year}.`; //using this keyworrd
  },
};

console.log(book);

console.log(`book name is ${book.title} and the author is ${book.author}`);

console.log(book.getGreeting());

book.updateYear(2022);

console.log("this is updated year", book.year);

let library = {
  name: "City Library",
  books: [
    {
      title: "Ikigai",
      author: "Grinccha",
      year: 2020,
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      year: 2018,
    },
  ],
};

console.log(library);

// Log  each book
library.books.forEach((book) => {
  console.log(
    `Book title: ${book.title}, Author: ${book.author}, Year: ${book.year}`
  );
});

console.log(`Library name: ${library.name}`);

library.books.forEach((book) => {
  console.log(`Book title: ${book.title}`);
});

console.log(book.getTitleAndYear());

for (let prop in book) {
  if (book.hasOwnProperty(prop)) {
    console.log(`${prop}: ${book[prop]}`);
  }
}

Object.keys(book).forEach((key) => {
  console.log(`${key}: ${book[key]}`);
});

Object.values(book).forEach((value) => {
  console.log(value);
});
