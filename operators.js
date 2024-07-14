//script 1
let a = 10,
  b = 20;

const add = a + b;
const sub = a - b;
const mul = a * b;
const div = a / b;
const mod = a % b;

console.log(add, sub, mul, div, mod);

//script 2
let c = 5,
  d = "10",
  e = 10;

const isEqual = a == b; //true - type not matters
const isStrictlyEqual = a === d; //false - type matters
const isSmall = a < b; // true
const isGreater = a > b; // false
const isSmallOrEqualTo = a <= e; //true - or equal to
const isGreaterOrEqualTo = a >= b; //true - or equal to
const isStrictlyNotEqual = a !== d; //false - negated
const and = a == d && a === d; //true & false = false
const or = a == d || a === d; //first condition is true, if not then next
const turn = a < b ? a++ : b++; // a = 11
const complex =
  a === d // false
    ? null
    : a == d //true
    ? a++
    : a < b && e < b //true & true
    ? e++
    : a === d || a >= e //false then true
    ? "end"
    : undefined;

console.log(
  isEqual,
  isStrictlyEqual,
  isSmall,
  isGreater,
  isSmallOrEqualTo,
  isGreaterOrEqualTo,
  isStrictlyNotEqual,
  and, or, turn, complex
);
