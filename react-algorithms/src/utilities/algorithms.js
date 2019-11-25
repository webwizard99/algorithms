import Unions from './unions';
import StacksQueues from './stacksqueues';
import EleSorts from './elesorts';
import mergesort from './mergesort';


const algorithms = (function(){
  // words array for sorting tests
  const arrMult = 80;
  const wordsArr = "nomination humanity slip suburb surprise entry prince moon budge consumer deserve generation notion promotion exchange breast trust trade association bell winner mold spring jacket siege wall explain elaborate vision dribble soil shark dollar virus beard movement hardware outlet miss exile shoot provide interest control roof clearance fuel scandal asylum storm overeat headquarters cake economics fat tongue computing page council contrary forum money god beg arena fortune governor castle paradox haircut trunk girlfriend beef flower custody taxi canvas democratic serve illness peanut read freeze reject cord wake beneficiary weed launch flock glasses costume fuss criticism donor relevance feed split dorm nomination float lover continuous necklace society swear".repeat(arrMult).split(' ');

  
  const messenger = {
    maxMessages: 50,
    messages: []
  }
  
  messenger.addText = function(textToAdd) {
    this.messages.push(textToAdd);
  }

  messenger.getMessages = function() {
    return this.messages;
  }

  messenger.clearMessages = function() {
    this.messages = [];
  }
  
  messenger.unionTest = function(fn, n, time) {
    this.addText(`${fn}: n: ${n}, time: ${time}, average: ${time / n}`);
  }
  
  messenger.stackTest = function(original, output, time) {
    this.addText(`Stack test...`);
    this.addText(original);
    this.addText(output);
  }
  
  messenger.queueTest = function(original, output) {
    this.addText(`Queue test...`);
    this.addText(original);
    this.addText(output);
  }
  
  messenger.sortTest = function(fn, N, time) {
    this.addText(`${fn} test, ${N} objects`);
    this.addText(`time used: ${time}ms`);
  }
  
  messenger.sortTestValidation = function(fn, N, time, output) {
    this.addText(`${fn} test, ${N} objects`);
    this.addText(`time used: ${time}ms`);
    this.addText(`output: ${output}`);
  }

  const unionTests = function() {
    let Union1 = Unions.newQuickUnion(20);
    let res = Union1.randomConnections(5);
    messenger.unionTest(...res);

    let Union2 = Unions.newQuickUnion(200);
    res = Union2.randomConnections(20);
    messenger.unionTest(...res);

    let Union3 = Unions.newQuickUnion(30000);
    res = Union3.randomConnections(4000);
    messenger.unionTest(...res);

    let WeightedUnion1 = Unions.newWeightedQuickUnion(30000);
    res = WeightedUnion1.randomConnections(4000);
    messenger.unionTest(...res);

    let Union4 = Unions.newQuickUnion(500000);
    res = Union4.randomConnections(20000);
    messenger.unionTest(...res);

    let WeightedUnion2 = Unions.newWeightedQuickUnion(500000);
    res = WeightedUnion2.randomConnections(20000);
    messenger.unionTest(...res);

    let Union5 = Unions.newQuickUnion(2000000);
    res = Union5.randomConnections(200000);
    messenger.unionTest(...res);

    let WeightedUnion3 = Unions.newWeightedQuickUnion(20000000);
    res = WeightedUnion3.randomConnections(200000);
    messenger.unionTest(...res);

  }

  const stacksQueuesTest = function() {
    // ***                   ***
    // *** Stacks and Queues ***
    // ***                   ***

    // Stack of Strings


    const StringClient = function(string) {
      let stack = StacksQueues.newLinkedStackOfStrings();

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

    // Queue of strings

    const StringClientQueue = function(string) {
      let queue = StacksQueues.newLinkedQueueOfStrings();

      const stringQueue = string.split(' ');

      let output = '';

      stringQueue.forEach(word => {
        if (word != '-') {
          queue.enqueue(word);
        } else {
          if (output == '') {
            output += queue.dequeue();
          } else {
            output += ' ' + queue.dequeue();
          }
        }
      });

      messenger.queueTest(string, output);

    }

    StringClientQueue("Mary had a little - lamb - - whose fleece - was white - - as snow");
  }

  const elementarySortsTest = function() {
    //  *************************
    //  *******   Sorts   *******
    //  *************************


    const stringSwapTest = EleSorts.newSelectionSortStrings();

    let res = stringSwapTest.sort(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);

    const stringInsertTest = EleSorts.newInsertionSortStrings();

    res = stringInsertTest.sort(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);

    const stringShellTest = EleSorts.newShellSortStrings();

    res = stringShellTest.sort(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = stringShellTest.sort(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = stringShellTest.sort(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = stringShellTest.sort(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
  }

  const mergeSortTest = function() {
    let res = mergesort.mergeStringArray(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = mergesort.mergeStringArray(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = mergesort.mergeStringArray(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = mergesort.mergeStringArray(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = mergesort.mergeStringArray(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = mergesort.mergeStringArray(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);

    res = mergesort.mergeStringArrayModded(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = mergesort.mergeStringArrayModded(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = mergesort.mergeStringArrayModded(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = mergesort.mergeStringArrayModded(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = mergesort.mergeStringArrayModded(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
    res = mergesort.mergeStringArrayModded(JSON.parse(JSON.stringify((wordsArr))));
    messenger.sortTest(...res);
  }
  
  return {
    init: function() {
      unionTests();
      stacksQueuesTest();
      elementarySortsTest();
      mergeSortTest();
    },

    getMessages: function() {
      const messages = JSON.parse(JSON.stringify(messenger.getMessages()));
      messenger.clearMessages();
      return messages;
    }
  }
}());

export default algorithms;









