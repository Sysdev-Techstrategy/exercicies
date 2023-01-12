let theWord = 'race car';
function checkPalindrome(string) {
  let stringWhitoutSpaces = string.replaceAll(` `, ``)
  let transformToArray = [...stringWhitoutSpaces];

  let reverseArray = transformToArray.reverse();

  let transformToString = reverseArray.join('');

  if (transformToString === stringWhitoutSpaces) {
    return true;
  }
  return false
};
console.log(checkPalindrome(theWord))

