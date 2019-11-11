const StacksQueues = (function(){
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

  const LinkedQueueOfStrings = function() {
    this.first = new Node();
    this.last = new Node();
  }
  
  LinkedQueueOfStrings.prototype.isEmpty = function() {
    return this.first.item == null;
  }
  
  LinkedQueueOfStrings.prototype.enqueue = function(item) {
    let oldlast = this.last;
    this.last = new Node();
    this.last.item = item;
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldlast.next = this.last;
    }
  }
  
  LinkedQueueOfStrings.prototype.dequeue = function() {
    let item = this.first.item;
    this.first = this.first.next;
    if (this.isEmpty()) {
      this.last = new Node();
      
    } else {
      return item;
    }
  }

  return {
    newLinkedStackOfStrings: function() {
      return new LinkedStackOfStrings();
    },

    newLinkedQueueOfStrings: function() {
      return new LinkedQueueOfStrings();
    }
  }
}());