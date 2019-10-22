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

messenger.unionTest = function(p, q, time) {
  this.addText(`Quick-union: p: ${p}, q: ${q}, time: ${time}`);
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
  let startTime = new Date().getTime();
  const i = this.root(p);
  const j = this.root(q);
  this.id[i] = j;
  let endTime = new Date().getTime();
  return endTime - startTime;
}

QuickUnion.prototype.randomConnections = function(n) {
  for (let i = 0; i < n; i++) {
    const p = Math.floor(Math.random() * ( this.id.length - 1));
    let q = p;
    while (q == p) {
      q = Math.floor(Math.random() * ( this.id.length - 1));
    }

    if (!this.connected(p, q)) {
      const uTime = this.union(p, q);
      messenger.unionTest(p, q, uTime);
    }
  }
}

let Union1 = new QuickUnion(20);
Union1.randomConnections(5);

let Union2 = new QuickUnion(200);
Union2.randomConnections(20);

let Union3 = new QuickUnion(30000);
Union3.randomConnections(400);

