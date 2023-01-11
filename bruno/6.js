// Take those two dates and create a function
//  to calculate the number of days between them.

function checkDaysBetween(date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  let diffInTime = date2.getTime() - date1.getTime();
  let diffInDays = diffInTime / (1000 * 3600 * 24);
  return diffInDays;

};
console.log(checkDaysBetween("08/10/2021", "09/11/2021"))
