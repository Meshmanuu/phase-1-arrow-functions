// index.js

// Function expression called divide
const divide = function(a, b) {
    return a / b;
  };
  
  // Arrow function called square
  const square = (num) => {
    return num * num;
  };
  
  // Arrow function called add
  const add = (a, b) => {
    return a + b;
  };
  
  module.exports = { divide, square, add };
  