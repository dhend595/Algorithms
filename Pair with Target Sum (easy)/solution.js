const pair_with_targetsum = function(arr, target_sum) {
    let pair = []
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length - 1; j++)
        if (arr[i] + arr[j] === target_sum){
            pair.push(i, j)
        }
    }
    return pair
  }

  //This a variation of the classic two sum solution. I initially went with
  //the brute force approach

  //time complexity: o(n^2)
  //space complexity: o(1)
  //language: Javascript

  const pair_with_targetsum = function(arr, target_sum) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        const currSum = arr[left] + arr[right]
        if (currSum === targetSum){
            return [left, right]
        }
        if (targetSum > currSum){
            left += 1
        }else{
            right -= 1
        }        
    }
    return [-1, -1]
  }

  //time complexity: O(n)
  //space complexity: O(1)
  //language: javascript


  function pair_with_target_sum(arr, targetSum) {
    const nums = {}; // to store numbers and their indices
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (targetSum - num in nums) {
        return [nums[targetSum - num], i];
      }
      nums[arr[i]] = i;
    }
    return [-1, -1];
  }  

  // This alternative utilizes a hastable sacraficing some space complexity.
  //time complexity: O(n)
  //space complexity: O(n)
  //language: javascript