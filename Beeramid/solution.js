var beeramid = function(bonus, price) {
    let totalBeers = bonus/price;
    let levels = 0;
    let i = 1;
    while (totalBeers >= i*i){
      totalBeers -= (i*i)
        i++
        levels++
    }
    return levels
  }