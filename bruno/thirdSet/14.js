let inputDecimal = 33550335;


function binStrArray(decimal) {
  const toBin = decimal.toString(2);
  const strArray = []
  strArray.push(...toBin)
  let lastArray = []
  for (i = 0; i < strArray.length; i++) {
    lastArray.push(+strArray[i])
  }
  //let mid = lastArray[Math.floor(lastArray.length / 2)];
  let firstHalf = [lastArray.slice(0, Math.floor(lastArray.length / 2))]
  let secondHalf = [lastArray.slice(Math.ceil(lastArray.length / 2))]
  if (firstHalf = secondHalf) {
    return true;
  }
  return false;
  //console.log(firstHalf)
  //console.log(secondHalf)
  //console.log(mid)
  //console.log(end)
  //console.log(lastArray)
}
console.log(binStrArray(inputDecimal))

//nao acredito que consegui
