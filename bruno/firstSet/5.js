// Given a month as an integer from 1 to 12,
// return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part 
// of the first quarter; month 6 (June), is
//  part of the second quarter; 
// and month 11 (November), is part of the 
// fourth quarter.



function checkMonth(month) {
  if (month <= 3) {
    console.log('first quarter')
  }
  else if (month > 3 && month <= 6) {
    console.log('second quarter')
  }
  else if (month > 6 && month <= 9) {
    console.log('third quarter')
  }
  else if (month > 9) {
    console.log('fourth quarter')
  } else {
    return 'enter valid month input'
  }
};
checkMonth(10)






