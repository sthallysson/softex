function Calculadora(num1, num2, operacao) {
  if (operacao === 1) {
    return num1 + num2;
  } else if (operacao === 2) {
    return num1 - num2;
  } else if (operacao === 3) {
    return num1 * num2;
  } else if (operacao === 4) {
    return num1 / num2;
  } else {
    return 0;
  }
}

let resultado = Calculadora(1, 2, 4);
console.log(resultado);
