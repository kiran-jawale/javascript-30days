//script 1
function outer() {
  let x = "Hello";
  function inner() {
    console.log(x);
  }
  return inner;
}

const innerFunc = outer();
innerFunc();

//acript 2

function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

//script 3
function createIdGenerator() {
  let lastId = Math.random();
  return function () {
    lastId = Math.random();
    return lastId;
  };
}

const generateId = createIdGenerator();
console.log(generateId());
console.log(generateId());
console.log(generateId());
console.log(generateId());

//task 4
function createGreetor(name) {
  return function display() {
    console.log(`Hello ${name}`);
  };
}

const greetHim = createGreetor("he");
greetHim();

const greetHer = createGreetor("she");
greetHer();

//script 4
function createFunctions(length) {
  const functions = [];
  for (let i = 0; i < length; i++) {
    ((index) => {
      functions.push(() => {
        console.log(`Function at index ${index} called`);
      });
    })(i);
  }
  return functions;
}

const theFunctions = createFunctions(3);

theFunctions.map((f) => f());

//task 6
function createItemManager() {
  let items = [];
  return {
    add: function (item) {
      items.push(item);
    },
    remove(item) {
      items = items.filter((i) => i !== item);
    },
    list: function () {
      return items;
    },
  };
}

const itemManager = createItemManager();
itemManager.add("python");
itemManager.add("js");
itemManager.add("react");
itemManager.add(10);
itemManager.add("NEXTJS");

console.log(itemManager.list());

itemManager.remove("js");
itemManager.remove("react");

console.log(itemManager.list());

//script 5
function memoize(func) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

function cube(n) {
  return n ** 3;
}
function addTwo(a, b) {
  return a + b;
}

const memoAddTwo = memoize(addTwo);
const memoCube = memoize(cube);

//caching first time
console.log(memoAddTwo(10, 20));
console.log(memoCube(3));

console.log(memoAddTwo(0, 20));
console.log(memoCube(5));
//cached, no need to recompute for same value
console.log(memoAddTwo(10, 20));
console.log(memoCube(3));

console.log(memoAddTwo(0, 20));
console.log(memoCube(5));

//task last
function factorial(num) {
  if (num == 0) { //0 or 1
    return 1; //last call
  } else {
    //return the factorial
    return num * factorial(num - 1);
    //recursively calls , at end , n == 0 then returns 1
    //hence 1*facto(0) = 1*1 = 1, 2*facto(1) = 2*1, 3*facto(2) = 3*2 = 6,...
  }
}
console.log('-----------------------------')
const memoFactorial = memoize(factorial);
console.log(factorial(3)); //caching
console.log(factorial(5)); //caching
console.log(factorial(5)); //caching
