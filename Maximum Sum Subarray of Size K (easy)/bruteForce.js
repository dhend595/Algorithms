const max_sub_array_of_size_k = function(k, arr) {
    let sumCurrentLargest = 0;
    let currentInterationSum = 0;
    for (let i = 0; i < arr.length - k + 1; i++) {
      for (let j = i; j < i + k; j++){
        currentInterationSum += arr[j]
        if (currentInterationSum > sumCurrentLargest){
          sumCurrentLargest = currentInterationSum
        }
        sumCurrentLargest = 0;
      }
    }
    return sumCurrentLargest
  };

  //time complexity O(n*k)
  //space complexity O(1)
  //language javascript