//script 1
function addTwo(a, b) {
  return a * b;
}
const person = {
  name: "Unknown",
  age: 20,
  getDetails() {
    console.log(this.name, this.age);
  },
  setDetails(name, age) {
    this.name = name;
    this.age = age;
  },
};

function multiply(a, b) {
    return a*b;
}


export default addTwo;
export { person , multiply};