function endsWith(word, ending) {
  if (word.substr(-(ending.length)) == ending) {
    return true
  }
  return false
}
console.log(endsWith('abc', 'b'))

//to peganno jeito