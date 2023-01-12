function removeExclamationMarks(string) {
  let newString = string.replaceAll(`!`, ``);
  return newString;
};
console.log(removeExclamationMarks('porra!!!!!!!!'))