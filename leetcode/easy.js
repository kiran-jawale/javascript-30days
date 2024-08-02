//task 1 - two sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} indices
 */
const twoSum = function (nums, target) {
  const numsMap = {}; //initially empty obj
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    // if the compliment value already in numsMap , i.e. a prev value from nums
    if (numsMap[compliment] !== undefined) {
      //checks key isn't undefined
      //return the found index and current index
      return [numsMap[compliment], i];
    }
    // Store the current number and its index in the numMap
    numsMap[nums[i]] = i;
  }
  return null;
};

const arr1 = [2, 7, 4, 5, 6]; //t = 9
const arr2 = [7, 14, 21, 4, 0]; //t = 7
const arr3 = [8, 6, 7, 5, 9, 8]; // t = 16

console.log(twoSum(arr1, 9));
console.log(twoSum(arr2, 7));
console.log(twoSum(arr3, 16));

/*
process : check the resultant complement in map, complement as a key with value to its index
[2, 7, 4, 5, 6], t = 9
i0
t - nums[0] = 9 - 2 = 7
map['7'] = undefined -> map['2'] = 0 index

i1
t - nums[1] = 9 - 7 = 2
map['2'] = defined -> map['2'], i -> 0,1

*/

console.log("----------------------------------------------------------");

//task 2 - Reverse Number

/**
 * @param {number} x
 * @return {number} bool
 */
var reverse = function (x) {
  if (x > 2 ** 31 - 1 || x < -(2 ** 31)) {
    throw new Error("Input value exceeds 32-bit signed integer range");
  }
  let reversed = 0; //initially 0
  let sign = Math.sign(x); //returns -1 if negative
  x = Math.abs(x); //convert to unsigned , positive
  while (x > 0) {
    //when completely reverse, the x turns 0
    reversed = reversed * 10 + (x % 10); //step 1
    x = Math.floor(x / 10); //step 2
  }
  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
    return 0;
  }
  return reversed * sign;
};

console.log(reverse(123456789));
console.log(reverse(123));
console.log(reverse(-525));

// Example 1: reverse(123456789)
/*
x = 123456789
reversed = 0
sign = 1 (positive)

Iteration 1:
x = 123456789
reversed = 0 * 10 + (123456789 % 10) = 9
x = Math.floor(123456789 / 10) = 12345678

Iteration 2:
x = 12345678
reversed = 9 * 10 + (12345678 % 10) = 98
x = Math.floor(12345678 / 10) = 1234567

...

Iteration 9:
x = 1
reversed = 987654321
x = Math.floor(1 / 10) = 0

return reversed * sign = 987654321
*/

console.log("----------------------------------------------------------");

//task 3 - Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */

function isPalindrome(x) {
  if (x < 0) return false; // -ve nums can't palindrome
  let originalNum = x;
  let reversed = 0; //initially 0

  while (x != 0) {
    reversed = reversed * 10 + (x % 10); // step 1
    x = Math.floor(x / 10); //step 2
  }
  return originalNum == reversed;
}

console.log(isPalindrome(10));
console.log(isPalindrome(-121));
console.log(isPalindrome(121));

/*
Same as reverse Num, comparison at end originalNum === reversedNum
*/

console.log("----------------------------------------------------------");

//task 4

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoList = function (list1, list2) {
  //nodes or two sorted lists
  let temp = new ListNode(0),
    current = temp; //new node as head and it's current one
  // Merge the two lists
  while (list1 && list2) {
    //while both non null
    if (list1.val < list2.val) {
      //if first's value < second's
      current.next = list1; //append first to next
      list1 = list1.next; //move to first's next
    } else {
      current.next = list2; //append second to next
      list2 = list2.next; //move to second's next
    }
    current = current.next; //move to next node
  }
  //if any list1 nodes remained
  if (list1) {
    current.next = list1; //append the remained to next
  } else current.next = list2;

  return temp.next;
};

const list1 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(2, new ListNode(4)));
console.log(mergeTwoList(list1, list2));

console.log("----------------------------------------------------------");

//task 5 - Valid Parenthesis

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []; //empty initially
const parenthesisMap = {
  ")": "(",
  "]": "[",
  "}": "{",
};
for (let char of s) {
  if (parenthesisMap[char]) {
    //checks the key, if map[char] true means the char is closingg bracket
    if (stack.length === 0 || stack.pop() !== parenthesisMap[char]) {
      //if stack is empty return dalse,
      //if stack isn't empty and the top elem isn't opening bracket
      return false;
    } 
  } else {
    stack.push(char);
  } //push char or bracket into stack
}
return stack.length === 0;
};

console.log(isValid('()'))
console.log(isValid('(]'))