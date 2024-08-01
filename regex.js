//matching word
const javascript = /javascript/g; //case sensitive
const str1 =
  "JS stands for Javascript, JAVAscript isn't related to Java, Jayatu javascriptum";
const match1 = str1.match(javascript);
console.log("Task 1:", match1);

//match all digits
const task2 = /\d/g;
const str2 =
  "one is 1 , two is 2, and one with two is 12 , not talking about 1 plus 2 bro";
const match2 = str2.match(task2);
console.log(match2);

//matching words starts with cap letter
const task3 = /\b[A-Z]\w+/g;
const str3 = "String Primitive and String Object is Different";
const match3 = str3.match(task3);
console.log(match3);

//matching sequence of  1 or more digits
const task4 = /\d+/g;
const str4 = "123 456 789 0 ";
const match4 = str4.match(task4);
console.log(match4);

//capture area code, central office code, and line number
const regex5 = /\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{4})/g;
const string5 = "(123) 456-7890";
const matches5 = string5.match(string5);
console.log("Task 5 captures:", matches5);

//username and domain from email
const task6 = /([^@]+)@([^.]+)\./;
const str6 = "example@ex.com";
const ex6 = "ex@example.com";
const match6 = str6.match(task6);
const m6 = ex6.match(task6);
console.log(match6, m6);

//getting first word of string
const task7 = /^\w+/g;
const str7 = "This is a JS String 1";
const match7 = str7.match(task7);
console.log(match7);

//getting end of string
const task8 = /\w+$/g;
const str8 = "End of Java by Javascript";
const match8 = str8.match(task8);
console.log(match8);

//password validation
const task9 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/g;
const str9 = "kumar#123A";
const match9 = str9.match(task9);
console.log(match9);

//validation of url
const task10 = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w \.-]*)*\/?$/g;
const str10 = "https://api.freeapi.app/api/v1/public/books";
const match10 = str10.match(task10);
console.log(match10);
