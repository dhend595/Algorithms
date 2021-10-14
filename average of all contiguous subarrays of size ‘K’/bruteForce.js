//Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

function averageOfSubArrays(arr, k) {
  let sum = 0;
  let result = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    result.push(sum / k);
    sum = 0;
  }
  return result;
}

//time complexity: O(n * k)
//space complexity: O(n)

// Language: javascript

// Inefficient solution due to the use of nested loops and any two consecutive subarrays of size ‘5’, the overlapping part (which will contain four elements) will be evaluated twice.