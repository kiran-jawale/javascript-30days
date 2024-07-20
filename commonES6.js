//srcipt 1
let name = 'unknown';
let age = 20;

console.log(`Name : ${name} \t Age : ${age}`);

const literally = `Line 1
Line 2
Line 3
Line 4`;

console.log(literally);

//script 2
const array = [10, 10.5, 'str', true, null];
let [first, second ] = array;
let [  ,  ,  third] = array
console.log(first, second, third);

const object = {
    key: 'value',
    nested: false,
    prop: BigInt( Math.ceil(1000 + Math.random() * 100000) )
};
const {key, prop} = object;
console.log(key, prop);

//script 3
const secondObj = {
    key: 'unique',
    nested: true,
    id: Math.random(),
};

const thirdObj = {
    key: 'third',
    id: 'third'
}

const arr = [...array, ...array];
const obj = {...object, ...secondObj}; //property version of the lastObj replaces previous's property version
console.log(arr, obj);

const newObj = {...obj, ...secondObj, ...thirdObj, ...arr} //array can be spread into object
console.log(newObj);

function spreadRest(first, ...rest) {
    console.log(rest); //rest arguments in an array
}
spreadRest('first', 2,3,4,5);

//script 4
const product = function(first, second = 1) { //function expression
    return console.log(first*second) ; //returns undefined
}
product(5, 10);
product(5, 1);

//script 5
let dynamicProperty = 'skill';
let valueOfProperty = 'MERN/NEXTJS';

const literallyObj = {
    name: 'Kumar',
    age: 20,
    greet() {   //direct method definition
        console.log(`Hi ${this.name}`)
    },
    [dynamicProperty]: valueOfProperty,
}

literallyObj.greet();
console.log(literallyObj.skill);

