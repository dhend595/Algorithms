//Write a function: that, given a string S of length N, returns the minimum number of additional letters needed to obtain a string containing blocks of equal lengths.


function equal(S) {
  let count = 0;
  let arr = S.split('');
  let length = arr.length;
  let i = 0;
  while (i < length) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
    i++;
  }else if (count === 0) {
    return 0;
    }
    return count;
}
