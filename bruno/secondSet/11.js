let alternating = 'altERnaTIng cAsE'
function alternate(string) {
  let newString;
  for (newString = 0; newString < string.length; newString++) {
    newString === string.toLowerCase() ? string.toUpperCase() : string.toLowerCase()
  }
  return string;
}

console.log(alternate(alternating))