import sortTools from './sortTools';

const heaps = (function(){

  const MaxHeapPQ = function() {
  
    this.pq = [];
    this.N = 0;
  
  }
  

  MaxHeapPQ.prototype.swim = function(k) {
    while (k > 1 && this.less(Math.floor(k/2), k) > 0) {
      this.exch(k, Math.floor(k/2));
      k = Math.floor(k/2);
    }
  }

  MaxHeapPQ.prototype.insert = function(x) {
    this.N++;
    this.pq[this.N] = x;
    this.swim(this.N);
  }

  MaxHeapPQ.prototype.sink = function(k) {
    while (2 * k <= this.N) {

      let j = 2 * k;
      // if j is not last item on pq and j is less than sibling,
      // increment j to point to larger sibling
      if (j < this.N && this.less(j, j+1) > 0) {
        j++;
      }
      // if sinking item is not less than larger child, stop
      // sinking
      if (!this.less(k, j)) {
        break;
      }

      this.exch(k, j);
      k = j;
    }
  }

  MaxHeapPQ.prototype.delMax = function() {
    
    const max = this.pq[1];

    this.exch(1, this.N);    
    this.N--;
    this.sink(1);
    this.pq[this.N + 1] = null;
    
    return max;
  }

  MaxHeapPQ.prototype.isEmpty = function() {
    return this.N === 0;
  }

  MaxHeapPQ.prototype.less = function(i, j) {
    const det = typeof this.pq[i];
    switch (det) {
      case 'string':
        return sortTools.compareStrings(this.pq[i], this.pq[j]);
      case 'number':
        return sortTools.compareNumbers(this.pq[i], this.pq[j]);
      default:
        return sortTools.compareStrings(this.pq[i], this.pq[j]);
    }
  }

  MaxHeapPQ.prototype.exch = function(i, j) {
    let t = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = t;
  }

  const Heap = function() {};

  Heap.prototype.less = function(arr, i, j) {
    let k = i - 1;
    let l = j - 1;
    const det = typeof arr[k];
    switch(det) {
      case 'string':
        return sortTools.compareStrings(arr[k], arr[l]);
      case 'number':
        return sortTools.compareNumbers(arr[k], arr[l]);
      default:
        return sortTools.compareStrings(arr[k], arr[l]);
    }
  }

  Heap.prototype.exch = function(arr, i, j) {
    let k = i - 1;
    let l = j - 1;
    let t = arr[k];
    arr[k] = arr[l];
    arr[l] = t;
    
  }

  Heap.prototype.sink = function(arr, k, N) {
    while (2 * k <= N) {
      let j = 2 * k;

      // if item has sibing and sibling is higher, increment
      // j
      if (j < N && this.less(arr, j, j + 1) > 0) {
        j++;
      }

      if (!this.less(arr, k, j) > 0) {
        break;
      } 

      this.exch(arr, k, j);
      k = j;
    }
  }

  Heap.prototype.sort = function(arr) {
    
    let N = arr.length;
    for (let k = Math.floor(N /2); k >= 1; k--) {
      this.sink(arr, k, N);
    }

    while (N > 1) {
      this.exch(arr, 1, N);
      N--;
      this.sink(arr, 1, N);
      
    }
  }
  

  return {
    loadMaxHeapPQ: function(arr) {
      let maxHeap = new MaxHeapPQ();


      for (let i = 0; i < arr.length; i++) {
        maxHeap.insert(arr[i]);
      }

    },

    heapSort: function(arr) {
      const N = arr.length;

      let startTime = new Date().getTime();

      let heap = new Heap();

      heap.sort(arr);


      let stopTime = new Date().getTime();

      return {
        fn: 'heapsort',
        N: N,
        time: stopTime - startTime,
        output: arr.join('\n')
      }
    }
  }
}());

export default heaps;