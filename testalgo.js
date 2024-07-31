
//bubble sort

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Test examples
console.log(bubbleSort([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]
console.log(bubbleSort([10, 7, 4, 1])); // [1, 4, 7, 10]

//selection sort

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}

// Test examples
console.log(selectionSort([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]
console.log(selectionSort([10, 7, 4, 1])); // [1, 4, 7, 10]

//quick sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let less = arr.slice(1).filter(x => x <= pivot);
    let greater = arr.slice(1).filter(x => x > pivot);
    return quickSort(less).concat(pivot, quickSort(greater));
}

// Test examples
console.log(quickSort([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]
console.log(quickSort([10, 7, 4, 1])); // [1, 4, 7, 10]

//linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return 1;
        }
    }
    return -1;
}

// Test examples
console.log(linearSearch([5, 2, 8, 1, 9], 2)); // 1
console.log(linearSearch([10, 7, 4, 1], 3)); // -1

//binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Test examples
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1

//count occurences
function countChars(string) {
    let counts = {};
    for (let char of string) {
        if (char in counts) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }
    return counts;
}

// Test examples
console.log(countChars("hello")); // { h: 1, e: 1, l: 2, o: 1 }
console.log(countChars("world")); // { w: 1, o: 1, r: 1, l: 1, d: 1 }

//longest substring
function longestSubstring(string) {
    let n = string.length;
    let longestSubLen = 0;
    for (let i = 0; i < n; i++) {
        let substring = "";
        for (let j = i; j < n; j++) {
            if (!substring.includes(string[j])) {
                substring += string[j];
            } else {
                break;
            }
        }
        longestSubLen = Math.max(longestSubLen, substring.length);
    }
    return longestSubLen;
}

// Test examples
console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb")); // 1
console.log(longestSubstring("pwwkew")); // 3

//rotating array
function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;
    if (k < 0) {
        k += n;
    }
    let rotated = [];
    for (let i = k; i < n; i++) {
        rotated.push(arr[i]);
    }
    for (let i = 0; i < k; i++) {
        rotated.push(arr[i]);
    }
    return rotated;
}

// Test examples
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]
console.log(rotateArray([1, 2, 3, 4, 5], -2)); // [4, 5, 1, 2, 3]

//merge sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }
    return mergedArr;
}

// Test examples
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// Dynamic programming

// Fibonacci
function fibonacci(n) {
    let fib = new Array(n + 1).fill(0); // initial list with '0', then elements n+1 times
    fib[1] = 1; // [0,1, ...]

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // fib[2] = fib[1] + fib[0] initially, then i++
    }

    return fib[n]; // return nth fibonacci number
}

console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(8));

// Knapsack - values have weight, capacity of knapsack (i.e. bag) is limited weight.
function knapsack(values, weights, capacity) {
    let n = values.length; // length of values or weights
    let dp = Array(n + 1).fill(0).map(() => Array(capacity + 10).fill(0)); // range() never iterates to last elem

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

// Example usage:
let weights = [2, 3, 4, 5];
let values = [10, 20, 30, 40];
let capacity = 10;
console.log(knapsack(values, weights, capacity));