import sortTools from './sortTools';

const shuffle = {
  knuth: function(arr) {
    const N = arr.length;

    for (let i = 0; i < N; i++) {
      const r = Math.floor(Math.random() * i);
      if (r !== i) {
        sortTools.exch(arr, i, r);
      }
    }
  }
}

export default shuffle;