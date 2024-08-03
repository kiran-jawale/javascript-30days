//task 1 - Add two numbers
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(); //head of resultant list
  let current = dummyHead; //current initially pointing to head
  let carry = 0; //to handle carry-over digits

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry; //step 1
    carry = Math.floor(sum / 10); //step 2
    current.next = new ListNode(sum % 10); //create new node

    current = current.next; //move next to created node
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    //move to next in each list
  }
  return dummyHead.next;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));

const l3 = new ListNode(0);
const l4 = new ListNode(0);
console.log(addTwoNumbers(l3, l4));

const l5 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
  )
);
const l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
console.log(addTwoNumbers(l5, l6));

console.log("--------------------------------------------------------------");

//tak 2 -Longest Substring without repeating characters
function lengthOfLongestSubstring(s = "") {
  let charMap = {};
  let maxLength = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd]; //current value
    if (rightChar in charMap) {
      //if value exists in obj
      windowStart = Math.max(windowStart, charMap[rightChar] + 1);
    } //else
    charMap[rightChar] = windowEnd; //store pair of value-index
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1); //max(prev maxLen and en-start+1)
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwkew"));
console.log(lengthOfLongestSubstring("bbbbb"));

console.log("--------------------------------------------------------------");

//task 3 - Container with most water
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let max = 0,
    left = 0,
    right = height.length - 1;
  while (left < right) {
    let width = right - left; //step 1
    max = Math.max(max, Math.min(height[left], height[right]) * width); //min of both values * cur width
    //max of resultant min*w and prev area
    if (height[left] < height[right]) {
      left++; //move rightwards
    } else right--; //move leftwards
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));

console.log("--------------------------------------------------------------");

//task 4 - 3Sum Triplet

function threeSum(arr) {
  let result = [];
  if (!arr.length || arr.length < 3) return [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) continue; //skipping duplicates
    let left = i + 1,
      right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) left++; // skip duplicates for left
        while (left < right && arr[right] === arr[right - 1]) right--; // skip duplicates for right
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else right--;
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));

//task 5 - Group Anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let map = new Map(); //the key as value
  
    for (let str of strs) { //iterate over array
      let sortedStr = str.split('').sort().join(''); //sort string
      //split('') = splits str into Array of chars, sort() = alphabetically sorted original array
      //join('') = joins chars into string , '' = no seperator 
      if(!map.has(sortedStr)) { //if map don't have sorted string
          map.set(sortedStr, []); //add it
      }  //case else OR then push string into array of sorted str
      map.get(sortedStr).push(str)
      //if sorted is in map, push current str into pair
      //else push str into pair
    }
  
    //convert map into array and return array of values
    return Array.from(map.values())
  }

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));