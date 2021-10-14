const max_sub_array_of_size_k = function(k, arr) {
    let sumCurrentLargest = 0;
    let currentInterationSum = 0;
    let result = [];
    for (let i = 0; i < arr.length - k + 1; i++) {
      for (let j = i; j < i + k; j++){
        currentInterationSum += arr[j]
        if (currentInterationSum > sumCurrentLargest){
          sumCurrentLargest = currentInterationSum
        }
      }
      result.push(sumCurrentLargest)
    }
    return result
  };

  function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
      windowSum = 0;
  
    for (i = 0; i < arr.length - k + 1; i++) {
      windowSum = 0;
      for (j = i; j < i + k; j++) {
        windowSum += arr[j];
      }
      maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
  }