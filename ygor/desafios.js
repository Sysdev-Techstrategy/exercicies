1;
let input = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" }, 
  { name: "Danny", age: 30, city: "London" }, 
  { name: "Lisa", age: 26, city: "Paris"}, 
  { name: "Sophie", age: 19, city: "Berlin" }
];

let result = [];
for( i in input) {
  result.push(input[i].name)
};

// console.log(result);

2;

var word1 = 'string';
var word2 = 'string';


// console.log(word1 + ' ' + word2);
3;

function isGreaterThan(a, b) {
   var result = a > b ? true : false;
   return result;
};

// console.log(isGreaterThan(10, 5));
4;

var date1 = new Date("08/10/2021");
var date2 = new Date("09/11/2021");

var Difference_In_Time = date2.getTime() - date1.getTime();

var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// console.log(date1 + date2 + Difference_In_Days);

5;
var text = "Alô!";
var result2 = text.repeat(5)

// console.log(result2);

6
var quarterOf = (mês) => {
  if(mês < 4) return 'Faz parte do primeiro trimestre!';
  if(mês < 7) return 'Faz parte do segundo trimestre!';
  if(mês < 10) return 'Faz parte do terceiro trimestre!';
  if(mês < 12) return 'Faz parte do quarto trimestre!';
  if (12 > mês) return undefined
}

// console.log(quarterOf(10));
