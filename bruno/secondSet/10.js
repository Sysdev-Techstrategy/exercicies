function multiplesLimit(number, limit) {
  let result = []
  for (i = 0; i <= limit; i++) {
    i % number === 0 ? result.push(i) : ''
  }
  return result;
};
console.log(multiplesLimit(2, 10))