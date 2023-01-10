var quarterOf = (mês) => {
  if(mês < 4) return 'Faz parte do primeiro trimestre!';
  if(mês < 7) return 'Faz parte do segundo trimestre!';
  if(mês < 10) return 'Faz parte do terceiro trimestre!';
  if(mês < 12) return 'Faz parte do quarto trimestre!';
  if (12 > mês) return undefined
}

console.log(quarterOf(10));