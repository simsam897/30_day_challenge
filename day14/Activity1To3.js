// class Person {
//   constructor(username, age) {
//     (this.username = username), (this.age = age);
//   }

//   greetiings() {
//     console.log(`good morning ${this.username} and my age ${this.age}`);
//   }

//   updateAge(newAge) {
//     this.age = newAge;

//     console.log(`age updated to ${this.age}`);
//   }
// }

// const person = new Person("zsam", 13);

// console.log(person.greetiings());
// console.log(person.updateAge(31)),
//   class student extends Person {
//     constructor(username, age, studentID) {
//       super(username, age);
//       this.studentID = studentID;
//     }

//     returnId() {
//       console.log(`${this.studentID}`);
//     }
//   };

class Person {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }

  greetings() {
    console.log(`Good morning ${this.username}, and my age is ${this.age}`);
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to ${this.age}`);
  }

  static genericGreeting() {
    return " Have a great day!";
  }
}

const person = new Person("zsam", 13);
person.greetings();

person.updateAge(31);

class Student extends Person {
  static createdStd = 0;
  constructor(username, age, studentID) {
    super(username, age);
    this.studentID = studentID;
    Student.createdStd++;
    console.log(`Total students: ${Student.createdStd}`);
  }

  returnId() {
    console.log(`Student ID: ${this.studentID}`);
  }

  greetings() {
    console.log(
      `Good morning ${this.username}, and your age is ${this.age}. My student ID is ${this.studentID}`
    );
  }
}

const student = new Student("zsam", 13, "S12345");
student.returnId();
student.greetings();

const generic = Person.genericGreeting();
console.log(generic);

const std1 = new Student("deep", 25, "d1234");
std1.returnId();
std1.greetings();

const std2 = new Student("deep", 25, "d1234");
std2.returnId();
std2.greetings();


