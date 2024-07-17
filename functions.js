//script 1
function isEven(n) {
    if(n % 2 === 0) return 'EVEN'
    return 'ODD'
}
let num = 5;
console.log(isEven(num))
console.log(isEven(8))

console.log('------------------------');

//script 2
function square(n) {
    return n*n;
}

let varnum = 10;
console.log(square(5))
console.log(square(varnum))

console.log('------------------------')

//script 3
function concatenateThese(str1,str2) {
    return str1 + str2
}
let varstring1 = 'one';
let varstring2 = 'Two'
console.log(concatenateThese(varstring1, varstring2))
console.log(concatenateThese('test','Two'))

console.log('------------------------')

//script 4
const addTwo = (num1, num2) => (num1 + num2);
console.log(addTwo(100,100))
console.log(addTwo(num, varnum))

console.log('------------------------')

//script 5
const hoc = (fun, count) => {
    for(let i = 1 ; i <= count ; i++) {
        fun(i);
    }
}
const nested = (c) => {
    console.log('Call' + c)
}

hoc(nested,3);

console.log('------------------------')

//activity 2
function whichMax(n1,n2) {
    return Math.max(n1, n2);
}

console.log(whichMax(15, varnum))

console.log('------------------------')

//activity 3
const isItIn = (string, char) => {
   let i = 0;

    while(i < string.length) {
        
        if(string[i] === char) {
            return true;
        }
        i++;
    }
    return false
}
//const isItIn = (str, char) => console.log(str.includes(char))

console.log(isItIn('abcdefghij','i'))
console.log(isItIn('abcdefghij','l'))

console.log('------------------------')

//activity 4
const multiply = (num, times = 1) => {
    return num*times
}

console.log(multiply(5))
console.log(multiply(5,10))

console.log('------------------------')

//activty 4
function greet(name, age = 1) {
    console.log('Hi '+name+', \nYou are '+age+' years old !')
}
greet('Kedar')
greet('Kumar',20)

console.log('------------------------')

//activity 5
const hocHoc = (fun1, fun2, val) => {
    return fun2(fun1(val));
}

const f1 = (x) => x*x;
const f2 = (y) => y + 1;

console.log(hocHoc(f1,f2,5))

console.log('------------------------')
