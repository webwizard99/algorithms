// lost solutions preceeding 118 due to clearing temporary
// internet files

// 118 Pascal's Triangle
var generate = function(numRows) {
  let output = [];
  let row = [];
  
  if (numRows === 0) return [];
  
  if (numRows === 1) return [[1]];
  row = [1];
  output.push(row);
  
  // iterate over each item in numRows
  for (let i = 1; i < numRows; i++) {
      // for each row, generate a blank array to put new row in
      let newRow = [];
      
      // copy last row, add 0 to beginning and end
      let cloneRow = [0, ...row, 0];
      
      // iterate over clone from 0 to length - 2
      for (let cloneI = 0; cloneI < cloneRow.length -1; cloneI++) {
          
          // add cloneI + cloneI+1 and push to new row array
          newRow.push((cloneRow[cloneI] + cloneRow[cloneI + 1]));
          
      }
  
      // push filled row to output array
      row = newRow;
      
      output.push(row);
  }
  
  // return output array
  return output;
};

// 121 Best Time to Buy and Sell Stock
var maxProfit = function(prices) {
  let totalMin, totalMax, currentMin, currentMax;
  
  if (prices.length == 0 || prices == []) return 0;
  
  
  prices.forEach(price => {
      if (currentMin == undefined || price < currentMin) {
          currentMin = price;
          currentMax = currentMin;
      }
      
      if (currentMax < price) {
          currentMax = price;
      }
      
      if (totalMin == undefined || (currentMax - currentMin > totalMax - totalMin)) {
          totalMin = currentMin;
          totalMax = currentMax;
      }
  });
  
  return (totalMax - totalMin);
};

// 122 Best Time to Buy and Sell Stock II
var maxProfit2 = function(prices) {
  let lowest = null;
  let highest = null;
  
  let profits = 0;
  
  prices.forEach((price, priceN) => {
      if (lowest != null && price < highest) {
          profits += highest - lowest;
          lowest = highest;
      }
      
      if (lowest == null || price < lowest) {
          lowest = price;
          highest = lowest;
      }
      
      if (price > highest) {
          highest = price;
      }
      
      if (priceN == prices.length - 1 && highest > lowest) {
          profits += highest - lowest;
      }
  });
  
  return profits;
};

// 125 valid palindrome
var isPalindrome = function(s) {
  let regex = /\W/gi;
  let parsedS = s.replace(regex, '');
  
  for (let i = 0; i < parsedS.length; i++) {
      if (parsedS.charAt(i).toLowerCase() != parsedS.charAt(parsedS.length - 1 - i).toLowerCase()) {
          return false;
      }
  }
  return true;
};

// 136 single number
var singleNumber = function(nums) {
  let hashmap = {};
  
  nums.forEach(num => {
      if (hashmap[num] == undefined) {
          hashmap[num] = 1;
      } else {
          delete hashmap[num];
      }
  });
  
  return Object.keys(hashmap)[0];
};

// 141 linked list cycle

// didn't know of Set() until looked at solution, but understand
// logic. code not super performant
var hasCycle = function(head) {
  if (!head) return false;
  let nodeset = new Set();
  let pointer = head;
  while (pointer.next) {
      if (!nodeset.has(pointer)) {
          nodeset.add(pointer);
      } else {
          return true;
      }
      
      
      pointer = pointer.next;
  }
  
  return false;
};

// 160 intersection of two linked lists

var getIntersectionNode = function(headA, headB) {
  // Set()
  
  // if headA or headB have no values return null
  if (!headA || !headB) return null;
  
  // create a set
  let nodeset = new Set();
  
  // create a pointer for each head (headA, headB)
  let pointerA = headA;
  let pointerB = headB;
  
  // create two booleans to determine if we've reached the end of either list
  let endA = false;
  let endB = false;
  
  // start a while loop based on either linked list having a next property
  while (!endA || !endB) {
  
      // check if current node for pointerA and pointerB are in our set
      // also check if pointer is null
      if (!endA && nodeset.has(pointerA)) {
          return pointerA;
      } else {
          nodeset.add(pointerA);
      }
  
      if (!endB && nodeset.has(pointerB)) {
          return pointerB;
      } else {
          nodeset.add(pointerB);
      }
  
      // if either pointer is in the set (and pointer not null), return the pointer
      
      // if pointer not in set (and not null), add to set
          
      // advance pointers to their next property
      if (!pointerA.next) {
          if (!endA) {
              endA = true;
          }
      } else {
          pointerA = pointerA.next
      }
  
      if (!pointerB.next) {
          if (!endB) {
              endB = true;
          }
      } else {
          pointerB = pointerB.next;
      }
  }
  
  return null;
  // return false
};

// 171. Excel column number

var titleToNumber = function(s) {
    let total = 0;
    const offset = 64;
    for (let i = 0; i < s.length; i++) {
        total += (s.charCodeAt(i) - offset) * (Math.pow(26, (s.length - 1 - i)));
    }
    return total;
};

// 189. Rotate array

var rotate = function(nums, k) {
    nums.unshift(... nums.splice((nums.length - k), k));
    
    // for (let i = 0; i < k; i++) {
    //     const num = nums.pop();
    //     nums.unshift(num);
    // }
};

// 190. Reverse bits 10%

// code not very performant
var reverseBits = function(n) {
    
    // set vars for converting variable to string
    let currentVal = '';
    let opNum = n;
    
    while (opNum >  0) {
        let thisDig = opNum % 2;
        currentVal += thisDig.toString();
        opNum = Math.floor(opNum / 2);
    }
    
    
    // if number is less than 32 bits, add extra bits in zeroes
    // to end of number
    while (currentVal.length < 32) {
        currentVal = currentVal + '0';
    }
    
    let outputVal = 0;
    let power = 1;
    
    let strArr = currentVal.split('');
    
    while (strArr.length > 0) {
        let tDig = strArr.pop();
        outputVal += tDig * power;
        power *= 2;
    }
    
    return outputVal;
};

// 190. Reverse Bits (try 2) 88%

var reverseBits2 = function(n) {
    
    // set vars for converting variable to string
    let currentVal = '';
    let opNum = n;
    
    while (opNum >  0) {
        let thisDig = opNum % 2;
        currentVal += thisDig.toString();
        opNum = Math.floor(opNum / 2);
    }
    
    let outputVal = 0;
    let power = Math.pow(2, (32 - currentVal.length));
    
    let strArr = currentVal.split('');
    
    while (strArr.length > 0) {
        let tDig = strArr.pop();
        outputVal += tDig * power;
        power *= 2;
    }
    
    return outputVal;
};

// 191. Number of 1 bits

var hammingWeight = function(n) {
    // if n = 0 return 0
    if (n == 0) return 0;
    
    // define a variable (let) to store number of 1s
    let ones = 0;
    
    // start a while loop conditional on n > 0
    while (n > 0) {
    
        // add to number of 1s the result of n % 2
        ones += n % 2;
    
        // set n = math floor of n /2
        n = Math.floor(n / 2);
        
    }
    
    // return our variable
    return ones;
};