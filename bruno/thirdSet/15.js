// let num = 1.7777;

// num = Math.round(num * 100) / 100
// console.log(num)
//toFixed(2) works too.
// function discoverDiscount(price, percentage) {
//   let percentageDecimal = percentage / 100;
//   let originalPrice = price / (1 - percentageDecimal)
//   return Math.round(originalPrice * 100) / 100
// }
function discoverOriginalPrice(price, discount) {
  let d = discount / 100;
  let originalPrice = price / (1 - d);
  return Number(originalPrice).toFixed(2)
}

console.log(discoverOriginalPrice(200, 25))

