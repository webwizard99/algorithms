import sortTools from './sortTools';

const EleSorts = (function(){
  const compareStrings = sortTools.compareStrings;
  const compareNums = sortTools.compareNumbers;
  
  const exch = sortTools.exch;
  
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
    return {
      fn: 'selection sort', 
      N: N, 
      time: stopTime - startTime, 
      output: strings.join(' ')
    };
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
    return {
      fn: 'insertion sort', 
      N: N, 
      time: stopTime - startTime, 
      output: strings.join(' ')
    };
  }

  const InsertionSortNumbers = function() {
  
  }
  
  InsertionSortNumbers.prototype.sort = function(nums) {
    let startTime = new Date().getTime();
    const N = nums.length;
    for (let i = 0; i < N; i ++) {
      for (let j = i; j > 0; j--) {
        if (compareNums(nums[j], nums[j - 1]) >= 0) {
          exch(nums, j, j - 1);
        } else break;
      }
    }
  
    let stopTime = new Date().getTime();
    return {
      fn: 'insertion sort numbers', 
      N: N, 
      time: stopTime - startTime, 
      output: nums.join(' ')
    };
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
    return {
      fn: 'shell sort', 
      N: N, 
      time: stopTime - startTime, 
      output: strings.join(' ')
    };
  }

  return {
    newSelectionSortStrings: function() {
      return new SelectionSortStrings();
    },

    newInsertionSortStrings: function() {
      return new InsertionSortStrings();
    },

    newInsertionSortNumbers: function() {
      return new InsertionSortNumbers();
    },

    newShellSortStrings: function() {
      return new ShellSortStrings();
    }
  }
}());

export default EleSorts;