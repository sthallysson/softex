alert("Calcular Fatorial");
const number = Number(prompt("Digite um numero"));

const fatorial = (n) => {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
};

try {
  if (isNaN(number) || number < 1 || Number.isInteger(number) === false)
    throw "Numero Invalido";

  alert(fatorial(number));
} catch (error) {
  console.log("Error: " + error);
} finally {
  console.log("Operação Encerrada!");
}
