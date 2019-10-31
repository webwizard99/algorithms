

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

