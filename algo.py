#bubble sort

def bubble_sort(arr):
    n = len(arr) #length of array
    for i in range(n): #loop for index of array
        for j in range(n - i - 1): #let j be the index - 1(prev index)
            if arr[j] > arr[j + 1]: #if current value greater than next value
                arr[j], arr[j + 1] = arr[j + 1], arr[j] #swap to ascend
    return arr #return sorted array

#selection sort
def selection_sort(arr):
    n = len(arr) #length of array
    for i in range(n): #loop till last index
        min_idx = i #current index as initial min i
        for j in range(i + 1 , n): #from next index till length
            if arr[min_idx] > arr[j]: #if min index > next index
                min_idx = j #then minIndex move to index (next to current i) 
                #finds the minimum value in the unsorted part of the array
        arr[i], arr[min_idx] = arr[min_idx], arr[i] 
        #swap current value with moved min index value
    return arr

#quick_sort
def quick_sort(arr):
    if len(arr) <= 1: #if arr has one elem or empty
        return arr
    else:
        pivot = arr[0] #let pivot be first elem
        less = [i for i in arr[1:] if i <= pivot] #check each elem
        #if elem < pivot, then added to less list
        greater = [i for i in arr[1:] if i > pivot]
        #if elem > pivot, then added to greater
        # return concatenation of the sorted less ,pivot and greater elements
        return quick_sort(less) + [pivot] + quick_sort(greater) #recursion till len(arr) is 1
    
#linear_search
def linear_search(arr, target):
    for i in range(0, len(arr)): #from first to last elem
        if(arr[i] == target): #check if target
            return 1
    return -1 #not found

#binary_search
def binary_search(arr, target):
    if len(arr) <= 1:
        return 0
    left = 0
    right = len(arr) - 1

    while(left <= right):               
        mid = (left + right) // 2 #floored the decimal num to int using //
        if arr[mid] == target: #if mid value is target
            return mid #return it
        elif arr[mid] < target: #if mid value < target
            left = mid + 1 #move to next from left
        else:
            right = mid - 1 #move to next from right
        #iterate till mid value is target
    return -1

#check occurences in string
def count_chars(string):
    counts = {} #initially empty dicitonary
    for char in string: #each char in string
        if char in counts: #if alreaady in dictionary
            counts[char] += 1 #then increment counter 
        else:
            counts[char] = 1 #else decrement counter
    return counts

#longest substring without repeated char
def longest_substring(string):
    n = len(string) - 1
    longest_sub_len = 0
    for i in range(n): #iterate till  len
        substring = "" #nested loop to generate substrings starts from new starter
        for j in range(i, n): #iterate from current till last
            if string[j] not in substring: #if jth elem not in cuurent substring
                substring += string[j] #appended to substring
            else:
                break #break the loop
        longest_sub_len = max(longest_sub_len, len(substring))
        return longest_sub_len
    
#rotating array
def rotate_array(arr, k):
    n = len(arr)
    k = k % n
    if k < 0:
        k += n
    rotated = [] #initially empty
    for i in range(k, n): #from k to end
        rotated.append(arr[i])

    for i in range(k): #from index 0 to k
        rotated.append(arr[i])
    
    return rotated

"""
def rotate(array):
n = len(array)
k = k % n #k should be greater than 0, if 0 then nothing to change
return array[:n-k] + array[n-k:] 
# [n-k:] starts from kth index, [:n-k] from 0 to ends at kth
n = 5, k =3 , [10-3:] = [7:], [:10-3] = [:7], [7:n] = s1, [0:7 = s2] 
[1,2,3,  4,5]
[3,4,  5,1,2]
"""

def merge_sorted_arrays(arr1, arr2):
    merged_arr = [] #initially empty
    i = 0
    j = 0
    while i in len(arr1) and j in len(arr2): #i for first, j for second
        if arr1[i] <= arr2[j]: #if first's elem is less
            merged_arr.append(arr1[1]) #then append it first
            i += 1 #increment index of first
        else:#if not, as second's elem is less than first's
            merged_arr.append(arr2[j]) #append second's
            #increment index of second
            
        #some elements of an array will remain
        #cause an array will iterated hence another's not completely

        while i in len(arr1): #current index of first
            merged_arr.append(arr1[i]) #append remaining elements
            i += 1
        while j in len(arr2):
            merged_arr.append(arr2[j]) #append rest
            j += arr2 
        
        return merged_arr
    

# Bubble Sort
arr1 = [64, 34, 25, 12, 22, 11, 90]
arr2 = [5, 2, 8, 1, 9]
print("Bubble Sort:")
print("Sorted array 1:", sorted(arr1))
print("Sorted array 2:", sorted(arr2))

# Selection Sort
arr1 = [64, 34, 25, 12, 22, 11, 90]
arr2 = [5, 2, 8, 1, 9]
print("\nSelection Sort:")
print("Sorted array 1:", sorted(arr1))
print("Sorted array 2:", sorted(arr2))

# Quick Sort
arr1 = [64, 34, 25, 12, 22, 11, 90]
arr2 = [5, 2, 8, 1, 9]
print("\nQuick Sort:")
print("Sorted array 1:", sorted(arr1))
print("Sorted array 2:", sorted(arr2))

# Linear Search
arr1 = [2, 3, 4, 10, 40]
arr2 = [1, 2, 3, 4, 5]
target1 = 10
target2 = 6
print("\nLinear Search:")
print("Target 1 found in array 1" if target1 in arr1 else "Target 1 not found in array 1")
print("Target 2 found in array 2" if target2 in arr2 else "Target 2 not found in array 2")

# Binary Search
arr1 = [2, 3, 4, 10, 40]
arr2 = [1, 2, 3, 4, 5]
target1 = 10
target2 = 6
print("\nBinary Search:")
print("Target 1 found in array 1" if target1 in arr1 else "Target 1 not found in array 1")
print("Target 2 found in array 2" if target2 in arr2 else "Target 2 not found in array 2")

# Count Characters
string1 = "Hello, World!"
string2 = "Python is awesome"
print("\nCount Characters:")
print("Character counts in string 1:", {char: string1.count(char) for char in set(string1)})
print("Character counts in string 2:", {char: string2.count(char) for char in set(string2)})

# Longest Substring without Repeated Characters
string1 = "abcabcbb"
string2 = "bbbbb"
print("\nLongest Substring without Repeated Characters:")
print("Length of longest substring in string 1:", len(set(string1)))
print("Length of longest substring in string 2:", len(set(string2)))

# Rotate Array
arr1 = [1, 2, 3, 4, 5]
arr2 = [1, 2, 3, 4, 5]
k1 = 2
k2 = 3
print("\nRotate Array:")
print("Rotated array 1:", arr1[k1:] + arr1[:k1])
print("Rotated array 2:", arr2[k2:] + arr2[:k2])

# Merge Sorted Arrays
arr1 = [1, 3, 5]
arr2 = [2, 4, 6]
arr3 = [1, 2, 3]
arr4 = [4, 5, 6]
print("\nMerge Sorted Arrays:")
print("Merged array 1 and 2:", sorted(arr1 + arr2))
print("Merged array 3 and 4:", sorted(arr3 + arr4))

#dynamic programming

#fibonacci

def fibonacci(n):
    fib = [0] * (n+1) # initial list with '0', then elements n+1 times
    fib[1] = 1 # [0,1, ...]

    for i in range(2, n+1):
        fib[i] = fib[i-1] + fib[i-2] #fib[2] = fib[1] + fib[0] initialy, then i++

    return fib[n] #return nth fibonacci number

print(fibonacci(3))
print(fibonacci(5))
print(fibonacci(8))

#knapsack - values has weight, capacity of knapsack,i.re. bag is limited weight.
def knapsack(values, weights, capacity):
    n = len(values) #len of values or weights
    dp = [ [0] * (capacity + 10 ) for _ in range(n + 1) ] #eange() never iterate for last elem

    for i in range(n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w])

            else:
                dp[i][w] = dp[i - 1][w]
            
    return dp[n][capacity]


# Example usage:
weights = [2, 3, 4, 5]
values = [10, 20, 30, 40]
capacity = 10
print(knapsack(weights, values, capacity))
