//script 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name} !`);
  }
  static staticMethod() {
    //static methods don't get inherited by subclasses
    console.log("Greeting from Person class !"); //can't accessed by even instances
  }
}

//script 3 - Person.staticMethod = function() { console.log('Greeting from Person class !') }

const person1 = new Person("Kumar", 20);
person1.greet();

//adding method to class prototype - for objects
Person.prototype.setDetails = function (name, age) {
  this.name = name;
  this.age = age;
};

console.log(person1); //person1 before injecting method
const person2 = new Person("May", 10); //person2 created after injection
person2.setDetails("Yam", 15); //person2 changed
console.log(person2);
person1.setDetails("test", 5); //person1 that created before injection
//still person1 has this method that injected after person1 creation
console.log(person1);

//script 2
class Student extends Person {
  constructor(name, age) {
    super(name, age);
    if (Student.totalStud >= 0) Student.totalStud++; //static property

    console.log(Student.totalStud);
    this.studId = Math.ceil(10 + Math.random() * 100);
  }
  static totalStud = 0; //script 3

  greet() {
    console.log(
      `Hey my student id is : ${this.studId}, and name : ${this.name}`
    );
  }
  getStudId() {
    return this.studId;
  }
}
const student1 = new Student("Stud1", 11);
console.log(student1.getStudId());
student1.greet();

//script 3
Person.staticMethod();
const student2 = new Student("Stud2", 12);
const student3 = new Student("Stud3", 13);

//script 4
class Dev {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const dev1 = new Dev("Senior", "Token");
console.log(dev1.fullName);
const dev2 = new Dev("Sans", "Scriptum");
dev2.fullName = "Sky Scraper";
dev2.fullName = "National Cult";

//script 5
class Account {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance
  }
  getBalance() {
    return this.#balance;
  }
  setDirectBalance(newBalance) {
    this.#balance = newBalance;
  }
  deposit(amount) {
    if (amount <= 0) {
      console.log("Amount must be greater than zero")
    } else {
         this.#balance += amount;
    console.log("Update balance", this.#balance);
    }
   
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log('Updated Balance',this.#balance)
    }
  }
}

const account1 = new Account(120)
console.log(account1.getBalance())
account1.setDirectBalance(1250)
console.log(account1.getBalance())
account1.deposit(50)
account1.withdraw(300)