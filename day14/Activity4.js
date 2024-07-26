class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.toUpperCase().split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person("sam", "Deep");

console.log(person.fullName);

person.fullName = "jack danials";

console.log(person.fullName);

class Account {
  // Private field
  #balance = 0;

  constructor(initialBalance = 0) {
    if (initialBalance > 0) {
      this.#balance = initialBalance;
    }
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      throw new Error("Deposit amount must be positive");
    }
  }

  withdrawal(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      throw new Error("Invalid withdrawal amount");
    }
  }
}

const myAccount = new Account(500);
console.log(myAccount.getBalance()); // 100
myAccount.deposit(5000);
console.log(myAccount.getBalance()); // 150
myAccount.withdrawal(3000);
console.log(`final balance`, myAccount.getBalance()); // 120
