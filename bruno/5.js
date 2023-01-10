// Given a month as an integer from 1 to 12,
// return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part 
// of the first quarter; month 6 (June), is
//  part of the second quarter; 
// and month 11 (November), is part of the 
// fourth quarter.



function checkMonth(month) {
  if (month <= 4) {
    console.log('first quarter')
  }
  else if (month > 4 && month <= 8) {
    console.log('second quarter')
  }
  else if (month > 8) {
    console.log('third quarter')
  }
  else {
    return 'enter valid month'
  }
};
checkMonth(4)






