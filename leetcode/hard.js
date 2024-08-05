//task 1 - Median sorted array
function findMedianSortedArrays(nums1, nums2) {
  const total = nums1.length + nums2.length;
  if (nums1.length > nums2.length) {
    //if first is wider then swap positions
    return findMedianSortedArrays(nums2, nums1); //recursion
  }
  let low = 0,
    high = nums1.length; //track indices

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2); //for nums1
    const partitionY = Math.floor((total + 1) / 2) - partitionX; //for nums2

    //extract values from indices
    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX =
      partitionX === nums1.length ? Infinity : nums1[partitionX];
    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY =
      partitionY === nums2.length ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if (total % 2 === 0) {
        //if len(mus1+mus2) = even
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
        //add( max betn leftx & lefty ,[ min betn rightx, righty] / 2 )
      } else {
        //if odd total len
        return Math.max(maxLeftX, maxLeftY); //max betn leftx and lefty
      }
    } else if (maxLeftX > maxLeftY) {
      high = partitionX - 1;
    } else low = partitionX + 1;
  }
}

console.log(findMedianSortedArrays([1, 2], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([3, 5, 6, 7], [7, 8, 9]));

console.log("-----------------------------------------------------");

//task 2 - Merge K sorted ListsNode
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists) {
  //takes array of lists(heads)
  const values = []; //array for all elements of all lists
  for (let list of lists) {
    //iterate for each list
    while (list) {
      //if exist
      values.push(list.val); //push the current node
      list = list.next; //move to next node
    }
  }
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  values.sort((a, b) => a - b); //sort the collection of all elements
  //if a < b then a first, if b < a then b first, if both same then no change

  for (let val of values) {
    //convert each value to node of linked list
    current.next = new ListNode(val);
    current = current.next; //move to next
  }
  return dummyHead.next; //return linked list except dummy head
}

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
console.log(mergeKLists([]));
console.log(mergeKLists([[]]));

console.log("-----------------------------------------------------");

//task 3 - trapping rain water
function trap(heights) {
  let left = 0,
    right = heights.length - 1;
  let leftMax = heights[left],
    rightMax = heights[right],
    trapped = 0;
  //tracking left and right pointers, and max height from leftside and rightside

  while (left <= right) {
    //while pointers meet
    if (heights[left] < heights[right]) {
      //compare heights at both sides
      if (heights[left] < leftMax) {
        //if current left < max left
        trapped += leftMax - heights[left]; //max - current = trapped upon current
      } else leftMax = heights[left]; //new max from left
      left++; //move rightwards
    } else {
      if (heights[right] < rightMax) {
        //check max betn rightside
        trapped += rightMax - heights[right];
      } else rightMax = heights[right]; //new max height
      right--; //move pointer leftwards
    }
  }
  return trapped; //finally return result
}

console.log(trap([0, 1, 2, 0, 4, 0, 5, 0, 2, 1, 0]));
console.log(trap([]));
console.log(trap([1]));

console.log("-----------------------------------------------------");

//task 4 - N Queens
function solveNQueens(n) {
  const board = new Array(n).fill(".").map(() => new Array(n).fill("."));
  const result = [];

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q")
        return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q")
        return false;
    }
    return true;
  }

  function placeQueen(row) {
    if (row === n) {
      result.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        placeQueen(row + 1);
        board[row][col] = "."; // backtrack
      }
    }
  }

  placeQueen(0);
  return result;
}

console.log(solveNQueens(4));
console.log(solveNQueens(2));
console.log(solveNQueens(1));

console.log("-----------------------------------------------------");

//task 5 - word ladder
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList); //convert array into set
  if (!wordSet.has(endWord) || !wordSet.has(endWord)) return 0; //end isn't exist in set

  const queue = [[beginWord, 1]]; //queue for storing words and their levels
  const visited = new Set(beginWord); //for tracking visited elements

  while (queue.length > 0) {
    //while queue is not empty
    const [word, level] = queue.shift(); //extract word from front
    if (word === endWord) return level;

    //iterate for each char position in the word
    for (let i = 0; i < word.length; i++) {
      //iterate over each alphabet
      for (let charCode = 97; charCode < 122; charCode++) {
        const char = String.fromCharCode(charCode); //convert to char
        const newWord = word.substring(0, i) + char + word.substring(i + 1);
        //let's replace each alphabet

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          //if word exists in set
          queue.push([newWord, level + 1]); //let's push it with corresponding level
        }
      }
    }
  }
  return 0;
};

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
console.log(ladderLength('cat','dog', ['cat','mat','mag' , 'tag','teg','pag','peg','heg','pog','dog']))