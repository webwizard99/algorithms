const sortTools = {
  compare: function(itemA, itemB) {
    console.log(typeof itemA)
    if (typeof itemA == typeof itemB) {
      switch(typeof itemA) {
        case 'number':
          return this.compareNumbers(itemA, itemB);
        case 'string':
          return this.compareStrings(itemA, itemB);
      }
    } else return null;
  },

  compareNumbers: function(numA, numB) {
    if (numA > numB) {
      return -1;
    } else if (numB > numA) {
      return 1;
    } else return 0;
  },
  
  compareStrings: function(stringA, stringB) {
    if (stringA > stringB) {
      return -1;
    } else if (stringB > stringA) {
      return 1;
    } else return 0;
  },
  
  exch: function(arr, i, j) {
    if (i == j) return;
    // const swap = arr.slice(i, i + 1);
    const swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
  }
}

export default sortTools;