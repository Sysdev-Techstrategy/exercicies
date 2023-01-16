function solution(str, ending) {
  if (ending.lenght == 0) return true
  return str.substr(-(ending.lenght)) == ending
};
