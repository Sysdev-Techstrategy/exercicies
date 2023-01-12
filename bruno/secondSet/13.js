function isItPossible(gallons, miles) {
  if (gallons === miles / 25) {
    return true;
  }
  return false;
};
console.log(isItPossible(3, 75))