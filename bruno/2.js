//  combine(word1, word2)

// Joins two strings with a space.

// **Parameters**

// **word1**: string

// **word2**: string

// **Returns**: string, joined the words joined with a space

let word1 = 'hello';
let word2 = ' world';
let combine = word1.concat(word2);
console.log(combine);

function join(word1, word2) {
  return word1 + '' + word2
};
console.log(join(word1, word2))