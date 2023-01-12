let alternating = 'altERnaTIng cAsE'

function alternate(string) {
  let newString = '';
  for (i = 0; i < string.length; i++) {
    newString += string[i] === string[i].toUpperCase() ? string[i].toLowerCase() : string[i].toUpperCase()
  };
  return newString;
};
console.log(alternate(alternating))