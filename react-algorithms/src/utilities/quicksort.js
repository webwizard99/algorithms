import sortTools from './sortTools';
import shuffle from './shuffle';

const quicksort = (function(){

  const compare = sortTools.compareNumbers;
  const exch = sortTools.exch;

  const Quick = function() {};

  Quick.prototype.partition = function(arr, lo, hi) {
    // I didn't want to increment i in the first compare, so I initialized i as lo + 1
    // and added a line to increment i below
    let i = lo, j = hi + 1;

    while (true) {
      while (compare(arr[++i], arr[lo]) > 0) {      // find item on left to swap
        
        if (i == hi) break;
      }

      while (compare(arr[lo], arr[--j]) > 0) {      // find item on right to swap
        
        if (j == lo) break;
      }

      if (i >= j) break;                      // check if pointers cross
      exch(arr, i, j);                          // swap partition item into place
    }

    exch(arr, lo, i);

    return j;
  }

  Quick.prototype.sort = function(arr, lo, hi) {
    if (hi <= lo) return;
    let j = this.partition(arr, lo, hi);
    console.log(j);
    this.sort(arr, lo, j -1);
    this.sort(arr, j + 1, hi);
  }

  Quick.prototype.Sort = function(arr) {
    shuffle.knuth(arr);
    this.sort(arr, 0, arr.length -1);
  }

  return {
    quickSortNumArr: function(numArr) {
      const N = numArr.length;

      let startTime = new Date().getTime();

      const quickSort = new Quick();

      quickSort.Sort(numArr);

      let stopTime = new Date().getTime();

      return {
        fn: 'quicksort numbers',
        N: N,
        time: stopTime - startTime,
        output: numArr.join('\n')
      }
    }
  }
}());

export default quicksort;