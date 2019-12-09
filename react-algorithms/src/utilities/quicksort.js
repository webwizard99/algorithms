import sortTools from './sortTools';
import shuffle from './shuffle';

const quicksort = (function(){

  const compare = sortTools.compareNumbers;
  const compareStr = sortTools.compareStrings;
  const exch = sortTools.exch;

  const Quick = function() {};

  Quick.prototype.partition = function(arr, lo, hi) {
    // I didn't want to increment i in the first compare, so I initialized i as lo + 1
    // and added a line to increment i below
    let i = lo + 1, j = hi;

    while (true) {
      while (compare(arr[i], arr[lo]) > 0) {      // find item on left to swap
        i++;
        if (i == hi) break;
      }

      while (compare(arr[lo], arr[j]) > 0) {      // find item on right to swap
        j--;
        if (j == lo) break;
      }

      if (i >= j) break;                      // check if pointers cross

      exch(arr, i, j);                          // swap partition item into place
    }

    exch(arr, lo, j);

    return j;
  }

  Quick.prototype.sort = function(arr, lo, hi) {
    if (hi <= lo) return;
    let j = this.partition(arr, lo, hi);
    this.sort(arr, lo, j -1);
    this.sort(arr, j + 1, hi);
  }

  Quick.prototype.Sort = function(arr) {
    shuffle.knuth(arr);
    this.sort(arr, 0, arr.length -1);
  }

  const Quick2 = function() {};

  Quick2.prototype.sort = function(arr) {
    if (arr.length < 2) return arr;

    const pivot = arr[arr.length -1];

    const left = [], right = [];

    for (let i = 0; i < arr.length -1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }

      return [...this.sort(left), pivot, ...this.sort(right)];
    }
  }

    const Quick3WayNums = function() {};

    Quick3WayNums.prototype.sort = function(arr, lo, hi) {
      if (hi <= lo) return;
      let lt = lo, gt = hi;
      let v = arr[lo];

      let i = lo;
      while (i <= gt) {
        let comp = compare(arr[i], v);
        if (comp > 0) {
          exch(arr, lt, i);
          lt++;
          i++;
        } else if (comp < 0) {
          exch(arr, i, gt);
          gt--;
        } else {
          i++;
        }
      }

      this.sort(arr, lo, lt - 1);
      this.sort(arr, gt + 1, hi);
    }

    const Quick3WayStrings = function() {};

    Quick3WayStrings.prototype.sort = function(arr, lo, hi) {
      if (hi <= lo) return;
      // console.log(`quick 3 way strings... hi: ${hi}, lo: ${lo}`);

      let lt = lo, gt = hi;
      let v = arr[lo];

      let i = lo;
      while (i<= gt) {
        let comp = compareStr(arr[i], v);
        // console.log(`comp: ${comp}, i: ${i}, lt: ${lt}, gt: ${gt}`);
        if (comp > 0) {
          exch(arr, lt, i);
          lt++;
          i++;
        } else if (comp < 0) {
          exch(arr, i, gt);
          
          gt--;
        } else {
          i++;
        }
      }
    
      this.sort(arr, lo, lt -1);
      this.sort(arr, gt + 1, hi);
    
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
    },

    quickSortNumArr2: function(numArr) {
      const N = numArr.length;

      let startTime = new Date().getTime();

      const quickSort2 = new Quick2();

      quickSort2.sort(numArr);

      let stopTime = new Date().getTime();

      return {
        fn: 'quicksort numbers v2',
        N: N,
        time: stopTime - startTime,
        output: numArr.join('\n')
      }


    },

    quickSort3WayNumbers: function(numArr) {
      const N = numArr.length;

      shuffle.knuth(numArr);
      

      let startTime = new Date().getTime();

      const quick3WayN = new Quick3WayNums();

      quick3WayN.sort(numArr, 0, numArr.length -1);

      let stopTime = new Date().getTime();

      return {
        fn: 'quicksort 3 way numbers',
        N: N,
        time: stopTime - startTime,
        output: numArr.join('\n')
      }

    },

    quickSort3WayStrings: function(strArr) {
      const N = strArr.length;

      // if (shuf) {
      //   shuffle.knuth(strArr);
      // }

      let startTime = new Date().getTime();

      const quick3WayS = new Quick3WayStrings();

      // debugger;

      quick3WayS.sort(strArr, 0, strArr.length -1);

      let stopTime = new Date().getTime();

      return {
        fn: 'quicksort 3 way strings',
        N: N,
        time: stopTime - startTime,
        output: strArr.join('\n')
      }
    }
  }
}());

export default quicksort;