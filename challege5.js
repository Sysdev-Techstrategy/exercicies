var quarterOf = (mês) => {
  if(mês < 4) {
    return 'Faz parte do primeiro trimestre!';
  } else if(mês < 7) { 
    return 'Faz parte do segundo trimestre!';
  } else if(mês < 10) {
    return 'Faz parte do terceiro trimestre!';
  } else if(mês < 12) {
    return 'Faz parte do quarto trimestre!';
  } else if(12 > mês) {
    return undefined;
  } else if(0 < mês) {
    return undefined;
  }
}

console.log(quarterOf(7));