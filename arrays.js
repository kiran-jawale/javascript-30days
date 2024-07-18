//asctivity 1
const array = [1, 2, 3, 4, 5];
console.log(array);

console.log(array[0]);
console.log(array[array.length - 1]);

console.log("------------------------");

//script 1
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newArray.pop());
console.log(newArray.push(20)); //adds to back and & returns new length
console.log(newArray.shift());
console.log(newArray.unshift("str")); //adds to front & returns new length

console.log("------------------------");

//script 2
const doubled = array.map((item) => item * 2);
console.log(doubled);
const filtered = array.filter((item) => item % 2 === 0);
console.log(filtered);
const reduced = array.reduce((prev, item) => prev + item, 0); //initial value is used as argument on first call
console.log(reduced);

console.log("------------------------");

//script 3
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < arr.length; i++) { //pure for loop
    console.log(arr[i])
}

for( let item of arr) { //for..of  loop for iterables
    console.log(item*10)
}

arr.forEach(function print(item, index) { //forEach contains callback
    console.log(index, item)
})

console.log("------------------------");

//script 4
const _matrix = [ 
    [0, 1, 10.5], //row 1
    ['a','b','c'], //row 2
    [true, false, null], //row 3
    [undefined, new Date(), {key: 'value'}] //row 4
 ]
 console.log(_matrix)

console.log("------------------------");

//activity 5
console.log(_matrix[3][2].key) //row 4, col 3

console.log("------------------------");
