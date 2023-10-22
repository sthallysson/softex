/* 
Com os conceitos aprendidos, crie um programa de calculadora que:

- receba dois valores, que devem ser salvos em variáveis; 
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.  
*/

const prompt = require("prompt-sync")(); //lib pra prompt em terminal

const valor1 = Number(prompt("Digite o valor 1: "));
const valor2 = Number(prompt("Digite o valor 2: "));
if (isNaN(valor1) || isNaN(valor2)) {
  console.log("Um dos valores é invalido! Digite um numero.");
  return;
}
const operador = prompt("Escolha a operadoração(+, -, *, /): ");
let resultado;

switch (operador) {
  case "+":
    resultado = valor1 + valor2;
    console.log(`${valor1} ${operador} ${valor2} = ${resultado}`);
    break;
  case "-":
    resultado = valor1 - valor2;
    console.log(`${valor1} ${operador} ${valor2} = ${resultado}`);
    break;
  case "*":
    resultado = valor1 * valor2;
    console.log(`${valor1} ${operador} ${valor2} = ${resultado}`);
    break;
  case "/":
    resultado = valor1 / valor2;
    console.log(`${valor1} ${operador} ${valor2} = ${resultado}`);

    if (valor1 % valor2 !== 0) {
      const resto = valor1 % valor2;
      console.log(`O resto de ${valor1} ${operador} ${valor2} = ${resto}`);
    }
    break;
  default:
    console.log("Operador Invalido");
    break;
}
