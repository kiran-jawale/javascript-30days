import addTwo from "./first.js"; //default import
import { multiply, person as p } from "./first.js"; //named import
import * as module from "./third.js"; //entire module imported
import axios from "axios"; //importing third-party module

console.log(addTwo(10, 20));
console.log(multiply(2, 6));
p.getDetails();
p.setDetails("Known", 10);
p.getDetails();

console.log(module.PI);
const tiger = new module.Animal("cat");
const penguin = new module.Animal("connecting-link");
console.log(tiger.property);
console.log(penguin.property);
module.display("string");

async function useAxios() {
  const response = await axios.get(
    "https://api.freeapi.app/api/v1/public/books"
  );
  const books = await response.data.data.data;
  return books;
}
async function useData() {
  const books = await useAxios();
  const data = books.map((book) => book.etag); // Now you can use map()
  console.log(data);
}
useData();

