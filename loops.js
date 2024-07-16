//script 1
for(let i = 1 ; i <= 10 ; i++){
    if(i == 5) continue;
    console.log(i)
}
console.log('------------------------')

let whilest = 1;
while(whilest <= 10){
    console.log(whilest)
    if(whilest == 7) break;
    whilest++;}

console.log('------------------------')
//script 2
const num = 5;
for(let i = 1 ; i <= 10 ; i++){
    let res = i * num;
    console.log(res)
}
console.log('------------------------')
//script 4
let counter = 1, sum =0;
while(counter <= 10){
    sum += counter;
    console.log(sum);
    counter++;
}
console.log('------------------------')

//activity 
let temp = 10;
while(temp >= 1){
    console.log(temp)
    temp--;
}
console.log('------------------------')

//activity
let newNum = 1;
do{
    console.log(newNum)
    newNum++;
}while(newNum <= 5);
console.log('------------------------')

//scipt 3
function drawStars(rows) {
    for (let i = 1; i <= rows; i++) {
      let stars = "";
      for (let j = 1; j <= i; j++) {
        stars += " * ";
      }
      console.log(stars);
    }
  }
  
  drawStars(5);
  console.log('------------------------')

  //script 5
  function factorial(n) {
    let result = 1;
    let k = 1;
    do{
        result *= k;
        console.log(result)
        k++;
    } while(k <= n)
  }
  factorial(5);

  console.log('------------------------')

