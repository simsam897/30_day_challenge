const str =
  "JavaScript is the most popular programming language. JavaScript helps you create really beautiful and crazy fast websites. A huge community of JavaScript is available on the internet. JavaScript is a lightweight.";

const regex = /JavaScript/g; // g stands for global , means it will not just match the or stop at first one javascript string
const matches = str.match(regex);
console.log(matches);

const text = "There are 123 apples, 45 bananas, and 6789 oranges.";

const regex_2 = /\d/g; // \d matches any digit, g flag for global match
const matches_2 = text.match(regex_2);

console.log(matches_2); // logs ["1", "2", "3", "4", "5", "6", "7", "8", "9"]



const str_3 = "This AI Paragraph Generator helps you create Unique, Custom, and well-written Paragraphs."

const regex_3 = /\b[A-Z][a-z]*\b/g
console.log("Number of words started with capital letters: ",str_3.match(regex_3));


//* Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches. */

const str_4 = "The room numbers are 101, 22, and 305."
const regex_4 = /\d+/g;

console.log("Number of digit start with one or more digit: ",str_4.match(regex_4));



const number = "(123) 456-7890"
const regex_5 = /^\((\d{3})\) (\d{3})-(\d{4})/

const matches_2 = number.match(regex_5);
console.log("Area Code: ", matches_2[1]);
console.log("Central office code: ", matches_2[2]);
console.log("Line number: ", matches_2[3]);

//* Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures. */

const email = "demon236@goggle.com";
const regex_6 = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

const matches_3 = email.match(regex_6)
console.log("Username: ", matches_3[1]);
console.log("Domain: ", matches_3[2]);




const str_5 = "Welcome to the website.";
const regex_7 = /^Welcome/gm; 

console.log(str_5.match(regex_7));

//* Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches. */

const str_6= "Check this out:amazing";
const regex_8 = /\b(\w+)\b$/;

const matches_4 = str_6.match(regex_8);

if (matches_4) {
  const last_word = matches_4[1];
  console.log("Last Word:", last_word)
} else {
  console.log("No match found.")
}



const password = "P@ssw0rd"; 
const regex_9= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;

const check_password = regex_9.test(password);

console.log("Is the password valid?", check_password);


//* Task 10: Write a regular expression to validate a URL. Log whether the URL is valid. */

const url = "https://www.w3schools.com/";

const regex_10 = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9#\?&=%_-]*)?$/;

const check_url = regex_10.test(url);

console.log("Is the URL valid?", check_url);