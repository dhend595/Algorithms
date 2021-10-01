var missingNumber = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
       sum += i + 1 + - nums[i] 
    }
    return sum;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
// Source: Leetcode

// Explanation: A little tricky to get it in 0(1) space. The idea is to use the sum of the array and the sum of the numbers from 1 to n. 
// Since the highest number in the array is nums.length + 1, I summed the index by plus 1 so that sum would always the total of the numbers in the array.
// After that all I needed to do was subract the values from the sum as we looped. This will give us the missing number by the end of the array.