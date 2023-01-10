// Write a function that accepts an 
// integer `n` and a string `s` as 
// parameters, and returns a string 
// of `s` repeated exactly `n` times.

// ### **Examples (input -> output)**


function repeat(times, string) {
  return string.repeat(times)
};

console.log(repeat(10, 'hello'))