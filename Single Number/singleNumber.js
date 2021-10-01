var singleNumber = function(nums) {
    let sorted = nums.sort()
    let stored = nums[0]
    for (let i = 1; i <= nums.length; i++){
        if(stored === nums[i]){
            stored = nums[1]
        }
    }
    return stored
};

// This was my first attempt at solving this problem. I was not able to solve it without timing out. The solution below is a much cleaner solution that uses the ^= operator. 
// I was previously unaware of this operator. Bitwise operators were something I was previously unaware of and after reading documentation I can understand how useful they can be. 

function singleNumber(nums) {
    let num = 0;
    for (let n of nums) {
      num ^= n;
    }
    return num;
  }

// There is also a solution that I did not consider that uses the .reduce() method. That solution also fits the same time and space complexity as the first solution.
// I find that higher order functions are something that I still struggle with and I am not sure how to use them effectively.

function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr);
}

// Time Complexity: O(n)
// Space Complexity: O(1)
//Source: leetcode