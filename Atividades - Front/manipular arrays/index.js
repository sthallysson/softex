let names = [
  "João",
  "Luis",
  "Debora",
  "Ana",
  "Maria",
  "Jonathan",
  "Isis",
  "Miguel",
  "Yasmim",
  "Vinicius",
];
let ages = [22, 23, 20, 18, 25, 26, 27, 28, 29, 17];
let colors = [
  "preto",
  "azul",
  "preto",
  "rosa",
  "roxo",
  "vermelho",
  "amarelo",
  "verde",
  "preto",
  "laranja",
];
function PrintLists() {
  console.log("Lista de Nomes:");
  names.forEach((name, i) => {
    console.log(i + 1 + "-", name);
  });
  console.log("\nLista de Idades:");
  ages.forEach((age, i) => {
    console.log(i + 1 + "-", age);
  });
  console.log("\nLista de cores favoritas:");
  colors.forEach((color, i) => {
    console.log(i + 1 + "-", color);
  });
}
PrintLists();

colors.splice(2, 1, "vermelho");
ages.splice(1, 1, 50);
console.log("\n-----------LISTAS ALTERADAS---------\n");
PrintLists();
