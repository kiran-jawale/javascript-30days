//script 1
let num = -8;

if (num < 0) {
  console.log("-ve");
} else if (num > 0) {
  console.log("+ve");
} else console.log("zero");

// scipt 2
age = 20;
if (age >= 18) console.log("Eligible");

//task
let a = 10,
  b = 5,
  c = 20;

if (a > b && a > c) console.log("A");
if (b > a && b > c) {
  console.log("B");
} else console.log("C")

//let largest = Math.max(a, b, c);  max() takes arguments and returns the largest value

//script 3
const day = 3;
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log('Other day');
        break;
}

//task

let score = 55;

switch (true) { // first matching case is true
  case score < 50:
    console.log("Grade: F");
    break;
  case score < 60:
    console.log("Grade: E");
    break;
  case score < 70:
    console.log("Grade: D");
    break;
  case score < 80:
    console.log("Grade: C");
    break;
  case score < 90:
    console.log("Grade: B");
    break;
  default:
    console.log("Grade: A");
}

//task
let n = 10;
console.log(n % 2 === 0 ? 'EVEN' : 'ODD')

//script 5

let year = 2024;
function isLeap (){
if (year % 4 === 0) { // year must be divisible by 4
    if (year % 100 === 0) { // year must not be divisible by 100, unless...
      if (year % 400 === 0) { // year must be divisible by 400
        return true; // it's a leap year!
      } else {
        return false; // not a leap year
      }
    } else {
      return true; // it's a leap year!
    }
  } else {
    return false; // not a leap year
  }
}
console.log(isLeap())
  /*function isLeapYear(){
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 100;
 } */

