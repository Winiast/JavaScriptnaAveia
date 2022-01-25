function comparaNumeros(number1, number2) {
  const Primeiraparte = criaprimeiraparte(number1, number2);
  const Segundaparte = criasegundaparte(number1, number2);

  return `${Primeiraparte} ${Segundaparte}`;
}

function criaprimeiraparte(number1, number2) {
  let Primeiraparte = `Os números ${number1} e ${number2} `;
  let simNao = "Não";

  if (number1 === number2) {
    simNao = "";
  }
  return `${Primeiraparte} ${simNao} são iguais`;
}

function criasegundaparte(number1, number2) {
  const soma = number1 + number2;
  let comparaDez = "Menor";
  let comparaVinte = "Menor";

  if (soma > 10) {
    comparaDez = "Maior";
  }
  if (soma > 20) {
    comparaVinte = "Maior";
  }

  return `Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20`;
}

console.log(comparaNumeros(10, 10));
