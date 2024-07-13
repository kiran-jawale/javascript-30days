//variables
var container = 'window object';
let variable = 'scoped';
const constant = Math.PI;

console.log(container, variable, constant)

//primitives
let num = 10; //    Number
let floated = 10.5; // Number
let boolean = true; 
let string = 'str';
let notDefined = undefined;
let explicitlyNotDefined = null;
let alsoUndefined;

//complex data types - not constant
const arr = [10, Math.random(),'str',boolean,
     false, alsoUndefined, explicitlyNotDefined,
    new Date(), BigInt( Math.floor(1 + Math.random() * 100000) ) ];
    
const obj = {
    key:'value',
    array:['obj > arr',
         { value:'obj > arr > obj',
           nestedArr: ['obj > arr > obj > arr', ['obj > arr > obj > arr > arr', {
            nestedObj:{
                end:true
            }
           }]]
     }]
}

console.log(obj.array[0].nestedArr[1][1].nestedObj.end)
console.log(arr)