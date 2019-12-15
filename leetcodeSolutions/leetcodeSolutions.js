// lost solutions preceeding 118 due to clearing temporary
// internet files

// 1. Twosum

// want to revisit this one because there was still some trial and error in executing it
var twoSum = function(nums, target) {
    let hashmap = {};
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (hashmap[nums[i]] == undefined) {
            hashmap[nums[i]] = i;
        }
        
        if (hashmap[complement] != undefined && hashmap[complement] != i) {
            return [hashmap[complement], i];
        }
    }
};

// 2. Add 2 Numbers (76% speed)

var addTwoNumbers = function(l1, l2) {
    
    // vars for tracking decimal value and power factorization
    let outputNum = new ListNode();
    let outputPointer = outputNum;
    let remainder = 0;
    
    // pointers for linked lists
    let pointer1 = l1;
    let pointer2 = l2;
    
    // booleans to track list termination
    let end1 = false;
    let end2 = false;
    
    while ((!end1 || !end2) || remainder != 0) {
        
        // declare a variable to store digit
        let digit = 0;
        
        // if pointer1 has value, add to digit
        if (!end1 && pointer1.val) {
            digit += pointer1.val;
        }
        
        // if pointer2 has value, add to digit
        if (!end2 && pointer2.val) {
            digit += pointer2.val;
        }
        
        // add any remainder to digit
        if (remainder > 0) {
            digit += remainder;
            remainder = 0;
        }
        
        // if digit has two decimal places, store excess digit as remainder
        if (digit > 9) {
            remainder = 1;
            digit = digit % 10;
        }
        
        let oldDigit = outputPointer;
        
        // copying enqueue format
        outputPointer = new ListNode();
        outputPointer.val = digit;
        if (outputNum.val == null) {
            outputNum = outputPointer;
        } else {
            oldDigit.next = outputPointer;
        }
        
        
        if (pointer1.next) {
            pointer1 = pointer1.next;
        } else {
            end1 = true;
        }
        
        if (pointer2.next) {
            pointer2 = pointer2.next;
        } else {
            end2 = true;
        }
        
    }
    
    
    return outputNum;
    
    
};

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
  
  if (prices.length == 0) return 0;
  
  
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

// 202. Happy Number

// Kind of went lazy on this with hashmap and JS libraries
// so it ended up not performant

var isHappy = function(n) {
    let hashmap = {};
    let product = n;
    
    
    while (product != 1) {
        let nDigits = product.toString().split('').map(nstr => Number.parseInt(nstr));
        
        product = nDigits.reduce((sum, dig) => sum + (dig * dig), 0);
        if (hashmap[product] != undefined) {
                return false;
        } else {
                hashmap[product] = 1;
        }
    }
    
    return true;
};

// worked around string conversion, much better performance but memory usage
// still bad probably from hashmap

var isHappy2 = function(n) {
    let hashmap = {};
    let product = n;
    
    
    while (product != 1) {
        let opProd = product;
        product = 0;
        while (opProd > 0) {
            let dig = (opProd % 10) * (opProd % 10);
            product += dig;
            opProd = Math.floor(opProd / 10);
        }
        
        if (hashmap[product] != undefined) {
                return false;
        } else {
                hashmap[product] = 1;
        }
    }
    
    return true;
};

// 217. Contains Duplicate

// fast but not good on memory
var containsDuplicate = function(nums) {
    if (nums.length == 0) return false;
    if (nums.length == 1) return false;
    
    let found = false;
    let hashmap = {};
    
    nums.forEach(num => {
        if (hashmap[num] == 1) {
            found = true;
        } else {
            hashmap[num] = 1;
        }
    });
    
    if (found == true) {
        return true;
    } else {
        return false;
    }
};


// 8. String To Integer (atoi)

// I attempted this but after wrangling with the solution,
// I can't get it to work because the NaN result from 
// Number.parseInt won't test to a NaN literal or even to 
// itself. I'm stumped as to why. I could make an array of
// characters from 0 to 9 and test against it, but
// I didn't want to do that.

var myAtoi = function(str) {
    let resInt = 0;
    let numberFound = false;
    let offset = 0;
    let valence = '';
    const wrong = Number.parseInt('n');
    console.log(wrong);
    
    while (true) {
        const ss = str.charAt(offset);
        if (!numberFound) {
            
            
            if (ss == '+' || ss == '-') {
                valence = ss;
                
            } else if (Number.parseInt(ss) != NaN && ss != ' ') {
                resInt = Number.parseInt(ss);
                numberFound = true;
                if (valence == '-') resInt *= -1;
            } else if (ss != ' ' && ss != '+' && ss != '-') {
                return 0;
            } 
            
             
        // if numberfound...
        } else {
            if (Number.parseInt(ss) !== NaN && ss != ' ' & ss != '-' && ss != '+') {
                console.log(Number.parseInt(ss) == wrong);
                resInt *= 10;
                if (resInt > 0) {
                    resInt += Number.parseInt(ss);    
                } else {
                    resInt -= Number.parseInt(ss);
                }
                
            }
        }
        
        if (resInt > (Math.pow(2, 31) - 1)) {
            return (Math.pow(2, 31) -1);
        } else if (resInt < -(Math.pow(2, 31))) {
            return -(Math.pow(2, 31));
        }
        
        offset++;
        if (offset == str.length) break;
    }
    
    return resInt;
    
};

// 8. String to Ingteger (try 2)
// tried using object keys to test for numerals. decent speed, but
// not good on memory

var myAtoi2 = function(str) {
    let resInt = 0;
    let numberFound = false;
    let offset = 0;
    let valence = 1;
    let numbers = {};
    
    for (let i = 0; i < 10; i++) {
        numbers[i.toString()] = i;
    }
    
    let signs = {};
    
    signs['-'] = -1;
    signs['+'] = 1;
    
    
    while (true) {
        const ss = str.charAt(offset);
        if (!numberFound) {
            
            
            if (signs[ss]) {
                valence = signs[ss];
                numberFound = true;
            } else if (numbers[ss] != undefined) {
                resInt = numbers[ss];
                numberFound = true;
                resInt *= valence;
            } else if (ss != ' ' && ss != '+' && ss != '-') {
                return 0;
            } 
            
             
        // if numberfound...
        } else {
            if (numbers[ss] != undefined) {
                
                resInt *= 10;
                resInt += (numbers[ss] * valence);
            } else break;
        }
        
        if (resInt > (Math.pow(2, 31) - 1)) {
            return (Math.pow(2, 31) -1);
        } else if (resInt < -(Math.pow(2, 31))) {
            return -(Math.pow(2, 31));
        }
        
        offset++;
        if (offset == str.length) break;
    }
    
    return resInt;
    
};


// 204. Count Primes

var countPrimes = function(n) {
    let primes = new Array(n);
    
    for (let i = 2; i * i < n; i++) {
        if (!primes[i]) {
            for (let j = 2; j * i < n; j++) {
                primes[i * j] = true;
            }
        }
    }
    
    let returnVal = 0;
    
    for (let i = 2; i < n; i++) {
        if (!primes[i]) {
            returnVal++;
        }
    }
    
    return returnVal;
};

// 206. Reverse Linked List

// good on time, not on memory

var reverseList = function(head) {
    let started = false;
    let current = head;
    
    if (head == null) return null;
    if (head.next == null) return head;
    
    let output = new ListNode();
    
    while (current != null) {
        if (!started) {
            let last = current;
            output.val = current.val;
            current = current.next;
            output.next = null;
            started = true;
        } else {
            let next = new ListNode();
            next.val = current.val;
            next.next = output;
            output = next;
            current = current.next
        }
    }
    
    return output;
};

// 412. Fizzbuzz

var fizzBuzz = function(n) {
    
    // if n == 0, return null
    if (n === 0) {
        return null;
    }
    
    
    // declare an array into which to put our numbers and strings
    let outputArr = [];
    
    // start a for loop (on 1) that stops on <= n / i++
    for (let i = 1; i <= n; i++) {
    
        // declare a string var to be added to array
        let tStr = '';
    
        // test if divisible by 3
        if (i % 3 === 0) {
    
            // string += "Fizz"
            tStr += "Fizz";
            
        }
    
        // test if divisible by 5
        if (i % 5 === 0) {
            
            // string += "Buzz"
            tStr += "Buzz";
            
        }
    
        // test if not divisible by 3 or 5
        if (i % 3 !== 0 && i % 5 !== 0) {
    
            // string = i.toString();
            tStr += i.toString();
            
        }
    
        // push string to array
        outputArr.push(tStr);
        
    }
    
    // return array
    return outputArr;
}