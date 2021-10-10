function absSort(arr) {
    const compareFunc = (a, b) => {
      if (Math.abs(a) < Math.abs(b)){
        return -1
      }else if (Math.abs(a) > Math.abs(b)){
          return 1
        }else if (a < b){
          return -1
        }else if (a > b){
          return 1
        }else {
          return 0
        }
    }
      arr.sort(compareFunc)
      return arr
  }
  