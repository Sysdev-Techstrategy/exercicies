function calculateDays(d1, d2) {
  const calculate = new Date(d2) - new Date(d1);
  const result = calculate / (1000 * 60 * 60 * 24);
  return result;
}

console.log(calculateDays('2023-01-03', '2023-02-03'));