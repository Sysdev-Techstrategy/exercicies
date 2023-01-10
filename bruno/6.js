// Take those two dates and create a function
//  to calculate the number of days between them.

let date1 = new Date("08/10/2021");
let date2 = new Date("09/11/2021");

let diffInTime = date2.getTime() - date1.getTime();
let diffInDays = diffInTime / (1000 * 3600 * 24);
console.log(diffInDays)
