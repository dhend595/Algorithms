const longest_substring_with_k_distinct = function(str, k) {
    let count = 0;
    let tempCount = 0;
    for (let i = 0; i < str.length; i++){
        for (let j = i + 1; j < str.length - 2; j++)
        if (arr[i] !== arr[j]){
            count++
            tempCount++
        }else if (arr[i] === arr[j]){

        }
    }
};


function longest_substring_with_k_distinct(str, k) {
    let windowStart = 0,
      maxLength = 0,
      charFrequency = {};
  
    // in the following loop we'll try to extend the range [window_start, window_end]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (!(rightChar in charFrequency)) {
        charFrequency[rightChar] = 0;
      }
      charFrequency[rightChar] += 1;
      // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
      while (Object.keys(charFrequency).length > k) {
        const leftChar = str[windowStart];
        charFrequency[leftChar] -= 1;
        if (charFrequency[leftChar] === 0) {
          delete charFrequency[leftChar];
        }
        windowStart += 1; // shrink the window
      }
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  
    return maxLength;
  }

  //space complexity: O(k)
  //time complexity: O(N)
  //language: Javascript