const Unions = (function(){

  const QuickUnion = function(N) {
    this.id = [];
    
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  
  }
  
  QuickUnion.prototype.root = function(i) {
    while (i!== this.id[i]) {
      i = this.id[i];
    }
    return i;
  }
  
  QuickUnion.prototype.connected = function(p, q) {
    return this.root(p) == this.root(q);
  }
  
  QuickUnion.prototype.union = function(p, q) {
    const i = this.root(p);
    const j = this.root(q);
    this.id[i] = j;
  }
  
  QuickUnion.prototype.randomConnections = function(n) {
    
    let startTime = new Date().getTime();
    for (let i = 0; i < n; i++) {
      
      const p = Math.floor(Math.random() * ( this.id.length - 1));
      let q = p;
      while (q == p) {
        q = Math.floor(Math.random() * ( this.id.length - 1));
      }
  
      if (!this.connected(p, q)) {
        this.union(p, q);
        
      }
    }
    let endTime = new Date().getTime();
    return ['Quick Union', n, endTime - startTime];
  }
  
  const WeightedQuickUnion = function(n) {
    this.sz = [];
    this.id = [];
  
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
      this.sz[i] = 1;
    }
  }
  
  WeightedQuickUnion.prototype.root = function(i) {
    
    while (!i == this.id[i]) {
      this.id[i] = this.id[this.id[i]];
      i = this.id[i];
    }
  
    return i;
  }
  
  WeightedQuickUnion.prototype.connected = function(p, q) {
    return this.root(p) == this.root(q);
  }
  
  WeightedQuickUnion.prototype.union = function(p, q) {
    let i = this.root(p);
    let j = this.root(q);
    if (i == j)  return;
    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j;
      this.sz[j] += this.sz[i];
    } else {
      this.id[j] = i;
      this.sz[i] += this.sz[j];
    }
  }
  
  WeightedQuickUnion.prototype.randomConnections = function(n) {
    
    let startTime = new Date().getTime();
    for (let i = 0; i < n; i++) {
      
      const p = Math.floor(Math.random() * ( this.id.length - 1));
      let q = p;
      while (q == p) {
        q = Math.floor(Math.random() * ( this.id.length - 1));
      }
  
      if (!this.connected(p, q)) {
        this.union(p, q);
        
      }
    }
    let endTime = new Date().getTime();
    return ['Weighted Quick Union', n, endTime - startTime];
  }

  return {
    newQuickUnion: function(n) {
      return new QuickUnion(n);
    },

    newWeightedQuickUnion: function(n) {
      return new WeightedQuickUnion(n);
    }
  }
}());

export default Unions;