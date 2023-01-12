function multipleNumbers(integer, limit) {
  var multiples = [];
  for(var i = integer; i <= limit; i = i + integer) {
    multiples.push(i);
  }
  return multiples;
};

console.log(multipleNumbers());
