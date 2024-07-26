const PI = Math.PI;
function display(str) {
  console.log(str);
}
class Animal {
  property;
  constructor(property) {
    this.property = property;
  }
  get property() {
    return this.property;
  }
}

export { Animal, PI, display };
