// Como temos uma lista desordenada de numeros o metodo indica para busca é a busca linear
const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

function buscaLinear(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }

  return -1;
}

console.log(buscaLinear(array, 20));
