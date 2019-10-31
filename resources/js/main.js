const messageBox = document.querySelector('.message-box');

const messenger = {
  maxMessages: 50,
  textCount: 0
}

messenger.addText = function(textToAdd) {
  messageBox.innerHTML += '<p class="message">' + textToAdd + '</p>';
  
  this.textCount++;

  if (this.textCount > this.maxMessages) {
    messageBox.removeChild(messageBox.childNodes[0]);
  }

  messageBox.scrollTop = messageBox.scrollHeight - messageBox.clientHeight;
}

messenger.unionTest = function(fn, n, time) {
  this.addText(`${fn}: n: ${n}, time: ${time}, average: ${time / n}`);
}

messenger.stackTest = function(original, output, time) {
  this.addText(`Stack test...`);
  this.addText(original);
  this.addText(output);
}

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
  messenger.unionTest('Quick Union', n, (endTime - startTime));
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
  messenger.unionTest('Weighted Quick Union', n, (endTime - startTime));
}

let Union1 = new QuickUnion(20);
Union1.randomConnections(5);

let Union2 = new QuickUnion(200);
Union2.randomConnections(20);

let Union3 = new QuickUnion(30000);
Union3.randomConnections(4000);

let WeightedUnion1 = new WeightedQuickUnion(30000);
WeightedUnion1.randomConnections(4000);

let Union4 = new QuickUnion(500000);
Union4.randomConnections(20000);

let WeightedUnion2 = new WeightedQuickUnion(500000);
WeightedUnion2.randomConnections(20000);

let Union5 = new QuickUnion(2000000);
Union5.randomConnections(200000);

let WeightedUnion3 = new WeightedQuickUnion(20000000);
WeightedUnion3.randomConnections(200000);


// Stacks and Queues

const Node = function(item = null) {
  this.item = item;
  this.next = null;
}

const LinkedStackOfStrings = function() {
  
  
  this.first = new Node();
}

LinkedStackOfStrings.prototype.isEmpty = function() {
  return this.first.item == null;
}

LinkedStackOfStrings.prototype.push = function(item) {

  let firstitem = this.first.item;
  let firstnext = this.first.next;
  let oldfirst = new Node();
  oldfirst.item = firstitem;
  oldfirst.next = firstnext;

  this.first = new Node();
  this.first.item = item;
  this.first.next = oldfirst;
}

LinkedStackOfStrings.prototype.pop = function() {
  let item = this.first.item;
  this.first = this.first.next;
  return item;
}

const StringClient = function(string) {
  let stack = new LinkedStackOfStrings();

  const stringQueue = string.split(' ');

  let output = '';

  stringQueue.forEach(word => {
    if (word != '-') {
      stack.push(word);
    } else {
      if (output == '') {
        output += stack.pop();
      } else {
        output += ' ' + stack.pop();
      }
    }
  });

  messenger.stackTest(string, output);

}

StringClient("Mary had a little - lamb - - whose fleece - was white - - as snow");

