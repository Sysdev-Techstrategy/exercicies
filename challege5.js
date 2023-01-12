var quarterOf = (month) => {
  if(month <= 3) {
    return 'part of the first trimester';
  } else if(month <= 6) { 
    return 'part of the second trimester';
  } else if(month <= 9) {
    return 'part of the third trimester';
  } else if(month <= 12) {
    return 'part of the fourth quarter';
  }
}

console.log(quarterOf());