const EleSorts = (function(){
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
  
  const SelectionSortStrings = function() {
  }
  
  SelectionSortStrings.prototype.sort = function(strings) {
    let startTime = new Date().getTime();
    const N = strings.length;
    for (let i = 0; i < N; i++) {
      let min = i;
      for (let j = i + 1; j < N; j++) {
        if (compareStrings(strings[j], strings[min]) == 1) {
          min = j;
        }
        
      }
      exch(strings, i, min);
    }
    let stopTime = new Date().getTime();
    return ['selection sort', N, stopTime - startTime, strings.join(' ')];
  }

  const InsertionSortStrings = function() {
  
  }
  
  InsertionSortStrings.prototype.sort = function(strings) {
    let startTime = new Date().getTime();
    const N = strings.length;
    for (let i = 0; i < N; i ++) {
      for (let j = i; j > 0; j--) {
        if (compareStrings(strings[j], strings[j - 1]) >= 0) {
          exch(strings, j, j - 1);
        } else break;
      }
    }
  
    let stopTime = new Date().getTime();
    return ['insertion sort', N, stopTime - startTime, strings.join(' ')];
  }

  const ShellSortStrings = function() {
  
  }
  
  ShellSortStrings.prototype.sort = function(strings) {
    let startTime = new Date().getTime();
    const N = strings.length;
    let h = 1;
    while (h < N/3) {
      h = 3 * h + 1;
    }
  
    while (h >= 1) {
      for (let i = Number.parseInt(h); i < N; i++) {
        for (let j = i;
            j >= Number.parseInt(h) && compareStrings(strings[j], strings[j - Number.parseInt(h)]) >= 0;
            j -= Number.parseInt(h)) {
          // console.log('shell exch');
          exch(strings, j, j -Number.parseInt(h));
        }
      }
      h = h / 3;
    }
  
    let stopTime = new Date().getTime();
    return ['shell sort', N, stopTime - startTime, strings.join(' ')];
  }

  return {
    newSelectionSortStrings: function() {
      return new SelectionSortStrings();
    },

    newInsertionSortStrings: function() {
      return new InsertionSortStrings();
    },

    newShellSortStrings: function() {
      return new ShellSortStrings();
    }
  }
}());

export default EleSorts;