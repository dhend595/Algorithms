const remove_duplicates = function(arr) {
    let nextNonDup = 1;
    let i = 1;
    while (i < arr.length){
        if (arr[nextNonDup - 1] !== arr[i]){
            arr[nextNonDup] = arr[i];
            nextNonDup += 1
        }
        i += 1
    }    
    return nextNonDup
}
//time complexity: o(n)
//space complexity: o(1)
//language: javascriptc