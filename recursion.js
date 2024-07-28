//script 1
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const memoFacto = memo(factorial);

function fibonacci(n) {
  if (n <= 1) {
    //if -ve or 0 or 1
    return n; //return as it is
  } else {
    //if not then
    return fibonacci(n - 1) + fibonacci(n - 2); //return result of n-1 + n-2
  } //i.e. result of prev 2 fibonacci
}
const memofib = memo(fibonacci);

//script 2
function sumArray(arr, length) {
  //n = arr.length
  if (length == 0) {
    //if empty [], then 0
    return 0;
  } else {
    //if not then last index's value + next from back
    return arr[length - 1] + sumArray(arr, length - 1); //next func will return addition of its or final index's values
  }
}
const memoSumArray = memo(sumArray);

function maxArray(arr, length) {
  if (length == undefined) throw new Error("Length parameter required");
  // array and length
  if (length == 0) {
    //if empty then return 0
    return 0;
  } else {
    //if not then , last index and next func
    return Math.max(arr[length - 1], maxArray(arr, length - 1));
  } //next func will return corresponding index's value
}
const memoMaxArray = memo(maxArray);

//script 3
function reverseString(str, length) {
  if (length == undefined) throw new Error("Length paramater required");
  if (length <= 0) {
    return "";
  } else {
    return str[length - 1] + reverseString(str, length - 1);
  }
}
const memoReverseString = memo(reverseString);

function isPalindromeV1(str) {
  if (str == "") return "";
  const reversedString = memoReverseString(str, str.length);
  if (str === reversedString) {
    console.log(reversedString);
    return true;
  } else {
    console.log(reversedString);
    return false;
  }
}
const memoIsPalindromeV1 = memo(isPalindromeV1);

function isPalindromeV2(str, leftIndex = 0, rightIndex = str.length - 1) {
  if (arguments.length !== 3) throw new Error("3 Params required");
  //get string, start and end index
  if (leftIndex >= rightIndex) {
    //if left >= right
    // means 1 = 1 then true or 1 > 0 then check palindrome
    return true;
  }
  if (str[leftIndex] === str[rightIndex]) {
    //string's left value == right vslue
    return isPalindromeV2(str, ++leftIndex, --rightIndex); //if true, then ++left & --right
  } else {
    //if both sides not equal then return isPalindrome() = return false
    return false;
  }
}
const memoIsPalindromeV2 = memo(isPalindromeV2);

//script 4
function binarySearch(arr, target, left = 0, right = arr.length) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    console.log("Index: ", mid, "Value", arr[mid]);
    return mid;
  } else if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}
const memoBinarySearch = memo(binarySearch);

function countOcuurences(arr, target, length = arr.length) {
  if (length <= 0) return 0;

  if (arr[length - 1] === target) {
    return 1 + countOcuurences(arr, target, length - 1);
  } else {
    return countOcuurences(arr, target, length - 1);
  }
}
const memoCountOcuurences = memo(countOcuurences);

//script 5
function inOrderTreeTraversal(node) {
  if (node === null) {
    //if no node
    return; //return to that place
  }

  //first left child
  inOrderTreeTraversal(node.left);
  //the current node
  console.log(node.data);
  //finally right child
  inOrderTreeTraversal(node.right);

  //inorder = left-root-right
  //preorder = root-left-right
  //postorder = left-right-root
}
const memoInorderTreeTraversal = memo(inOrderTreeTraversal);

function depth(node) {
  if (node == null) {
    return 0;
  }
  return 1 + Math.max(depth(node.left), depth(node.right));
}
const memoDepth = memo(depth);

//memo closure
function memo(func) {
  //functions are fully hoisted
  let cache = {}; //the wrapper takes func , cache memory
  return function (...args) {
    const key = JSON.stringify(args); //argument for the func as key
    if (key in cache) {
      //if key already in cache
      return cache[key]; //return the value for that key
    } else {
      //if not
      const result = func(...args); //result of func
      cache[key] = result; //save result with the key as args
      return result; //return result of func
    }
  };
}

console.log(memoFacto(3));
console.log(memoFacto(5));
console.log(memofib(0)); //0
console.log(memofib(1)); //1
console.log(memofib(2)); //1
console.log(memofib(3)); //2
console.log(memofib(4)); //3
console.log(memofib(5)); //5

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(memoSumArray(arr1, arr1.length));
console.log(memoSumArray(arr2, arr2.length));
console.log(memoSumArray(arr3, arr3.length));

console.log(memoMaxArray(arr1, arr1.length));
console.log(memoMaxArray(arr2, arr2.length));
console.log(memoMaxArray(arr3, arr3.length));

let string = "nextjs";
let str = "javascript";
console.log(memoReverseString(string, string.length));
console.log(memoReverseString(str, str.length));

console.log(memoIsPalindromeV2(string, 0, string.length - 1));
let gig = "gig";
let pop = "pop";

console.log(memoIsPalindromeV2(gig, 0, pop.length - 1));
console.log(memoIsPalindromeV2(pop, 0, pop.length - 1));

console.log(memoBinarySearch(arr1, 2));
console.log(memoBinarySearch(arr2, 4));
console.log(memoBinarySearch(arr3, 6));
console.log(memoCountOcuurences(str, "a"));
console.log(memoCountOcuurences(string, "s"));
console.log(memoCountOcuurences(gig, "g"));
console.log(
  memoCountOcuurences(
    `chandu ke chachi ne chandu ke chacha ko
   chandi ke chammach se chatani chatayi`,
    "c"
  )
);

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node("1");
const node2 = new Node("2");
const node3 = new Node("3");
const node4 = new Node("4");
const node5 = new Node("5");
const node6 = new Node("6");
const node7 = new Node("7");
root.left = node2;
root.right = node3;
root.left.left = node4;
root.left.right = node5;
node3.left = node6;
node3.right = node7;
console.log("------------------------------------------");
memoInorderTreeTraversal(root);
console.log("Depth of root 1 :", memoDepth(root));

const newRoot = new Node("10");
newRoot.left = new Node("9");
newRoot.right = new Node("8");
newRoot.left.left = new Node("7");
newRoot.left.right = new Node("6");
newRoot.right.left = new Node("5");
newRoot.right.right = new Node("4");
newRoot.left.left.left = new Node('3');
newRoot.left.right.left = new Node('2');
newRoot.right.left.left = new Node('1');
newRoot.right.left.right = new Node('0')
console.log('==========================')
memoInorderTreeTraversal(newRoot);
console.log('Depth of new root :', memoDepth(newRoot))