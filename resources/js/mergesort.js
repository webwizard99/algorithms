const mergesort = (function(){
  const compareStrings = function(stringA, stringB) {
    if (stringA > stringB) {
      return -1;
    } else if (stringB > stringA) {
      return 1;
    } else return 0;
  }

  const exch = function(arr, i, j) {
    if (i == j) return;
    // const swap = arr.slice(i, i + 1);
    const swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
  }

  const insertSort = function(strings) {
    const N = strings.length;
    for (let i = 0; i < N; i ++) {
      for (let j = i; j > 0; j--) {
        if (compareStrings(strings[j], strings[j - 1]) >= 0) {
          exch(strings, j, j - 1);
        } else break;
      }
    }
  }
  
  const Merge = function() {}

  Merge.prototype.merge = function(arr, lo, mid, hi) {
      let aux = [];
      
      for (let index = lo; index <= hi; index++) {
        aux[index] = arr[index];
      }

      let loMark = lo, hiMark = mid + 1;

      for (let index = lo; index <= hi; index++) {
        if (loMark > mid) {
          arr[index] = aux[hiMark];
          hiMark++;
        } else if (hiMark > hi) {
          arr[index] = aux[loMark];
          loMark++;
        } else if (compareStrings(aux[hiMark], aux[loMark]) == 1) {
          arr[index] = aux[hiMark];
          hiMark++;
        } else {
          arr[index] = aux[loMark];
          loMark++;
        }
      }
    }

  Merge.prototype.sort = function(arr, lo, hi) {
      if (hi <= lo) return;
      let mid = Number.parseInt(lo + (hi - lo) / 2);
      this.sort(arr, lo, mid);
      this.sort(arr, mid + 1, hi);
      this.merge(arr, lo, mid, hi);
    }

  Merge.prototype.sortMod = function(arr, lo, hi) {
    if (hi <= lo) return;
    if (hi - lo < 7) {
      let mid = Number.parseInt(lo + (hi - lo) / 2);
      this.sort(arr, lo, mid);
      this.sort(arr, mid + 1, hi);
      this.merge(arr, lo, mid, hi);
    } else {
      insertSort(arr.slice(lo, hi));
    }
    
  }

  Merge.prototype.Sort = function(arr) {
      this.sort(arr, 0, arr.length -1)
  }

  Merge.prototype.SortMod = function(arr) {
    this.sortMod(arr, 0, arr.length -1);
  }
  

  return {
    mergeStringArray: function(strArr) {
      const N = strArr.length;

      let startTime = new Date().getTime();

      const mergeStrings = new Merge();
      
      mergeStrings.Sort(strArr);

      let stopTime = new Date().getTime();

      return ['merge sort', N, stopTime - startTime, strArr.join(' ')];
    },

    mergeStringArrayModded: function(strArr) {
      const N = strArr.length;

      let startTime = new Date().getTime();

      const mergeStrings = new Merge();
      
      mergeStrings.Sort(strArr);

      let stopTime = new Date().getTime();

      return ['merge sort w/ insertion', N, stopTime - startTime, strArr.join(' ')];
    }

  }
}());