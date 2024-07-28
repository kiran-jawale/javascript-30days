let num = 10;
function func() {}
let arr = [];
let obj = {};
let date = new Date();
let symbol = Symbol("S");

console.log("---------------------------------------------");

console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
console.log(Object.getPrototypeOf(func) === Function.prototype); // true
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
console.log(Object.getPrototypeOf(num) === Number.prototype); // true
console.log(Object.getPrototypeOf(date) === Date.prototype); //true
console.log(Object.getPrototypeOf(symbol) === Symbol.prototype); //true

console.log("---------------------------------------------");

console.log(Object instanceof Object && Object instanceof Function); //true, object and also Constructor
console.log(Function instanceof Function && Function instanceof Object); //true, Construvtor and object
console.log(Number instanceof Object && Number instanceof Function); //true
console.log(Date instanceof Object && Date instanceof Function); //true
console.log(Array instanceof Function && Array instanceof Object); //true
console.log(Symbol instanceof Object && Symbol instanceof Function); //true

console.log("---------------------------------------------");

console.log(Object.getPrototypeOf(Object) === Object.prototype); //false, bcz a constrctor
console.log(
  Object.getPrototypeOf(Function) === Function.prototype &&
    Object.getPrototypeOf(Array) === Function.prototype &&
    Object.getPrototypeOf(Number) === Function.prototype &&
    Object.getPrototypeOf(Symbol) === Function.prototype &&
    Object.getPrototypeOf(Object) === Function.prototype &&
    Object.getPrototypeOf(Date) === Function.prototype
); //all cases true
console.log("---------------------------------------------");

console.log(
  typeof num,
  typeof date,
  typeof symbol,
  typeof arr,
  typeof obj,
  typeof func
);
console.log(
  typeof Object,
  typeof Function,
  typeof Array,
  typeof Number,
  typeof Date,
  typeof Symbol
);
console.log(
  typeof Object.prototype,
  typeof Function.prototype /* function */,
  typeof Array.prototype,
  typeof Number.prototype,
  typeof Date.prototype,
  typeof Symbol.prototype
); // all cases object except typeof Function.prototype -> function

console.log("---------------------------------------------");

console.log(
  obj instanceof Object,
  arr instanceof Array,
  func instanceof Function,
  num instanceof Number /*false */,
  date instanceof Date,
  symbol instanceof Symbol /*false */
); //primitives aren't objects, they have prototype

console.log(Object.getPrototypeOf(Object.prototype)); //null
console.log(
  //prototype of prototypes is Object.prototype
  Object.getPrototypeOf(Function.prototype) === Object.prototype,
  Object.getPrototypeOf(Array.prototype) === Object.prototype,
  Object.getPrototypeOf(Number.prototype) === Object.prototype,
  Object.getPrototypeOf(Date.prototype) === Object.prototype,
  Object.getPrototypeOf(Symbol.prototype) === Object.prototype
); //true

console.log("---------------------------------------------");

console.log(typeof console); //object, bu actually console in namespace
console.log(typeof Math); //object
console.log(typeof window); //undefined
console.log(typeof this); //undefined
console.log(typeof new Error()); //object
console.log(Object.getPrototypeOf(Error.prototype) === Object.prototype); //true

console.log("---------------------------------------------");

class Shape {}
const circle = new Shape();
const promise = new Promise((res) => {res()})

console.log(typeof Shape); //function,
console.log(Object.getPrototypeOf(Shape) === Function.prototype); //true
console.log(Object.getPrototypeOf(circle) === Shape.prototype); //true
console.log(typeof document); //undefined
console.log(Object.getPrototypeOf(promise) === Promise.prototype) //true
console.log(Object.getPrototypeOf(Promise.prototype) === Object.prototype ) //true

console.log("---------------------------------------------");
