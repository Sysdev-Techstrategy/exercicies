function returnMaximum(num1) {
  let max = Math.max(...num1);
  return max;
};
function returnMinimum(num2) {
  let max = Math.min(...num2);
  return max;
};

console.log('maximum = ' + returnMaximum([4, 6, 2, 1, 9, 63, -134, 566]) + ', Minimum = ' + returnMinimum([4, 6, 2, 1, 9, 63, -134, 566]))

//spread Operator (...), before the variable
// let myArray = [2, 4, 6, 88, 10, 30]
// console.log(...myArray)