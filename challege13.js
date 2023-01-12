var distance = (50);
var miles = (25);
var gallon = (2);

function arrivalPoint(distance, miles, gallon) {
  var arrival = miles * gallon;
  if(arrival >= distance) {
    return true;
  } else{
    return false;
  }
};

console.log(arrivalPoint());
