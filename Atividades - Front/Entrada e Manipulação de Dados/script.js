// 1- Implemente o slide numero 5
let frase = prompt("Entra a primeira frase");
console.log(frase);

// 2- Implemente o slide numero 13
let string = "123";
console.log(typeof Number(string));

let number = 123;
console.log(typeof String(number));

// 3- Implemente o slide numero 16
let numero1 = prompt("Digite o primeira numero");
let numero2 = prompt("Digite o segundo numero");

let resultado = Number(numero1) + Number(numero2);
console.log(resultado);

// 4- Implemente o slide numero 23
let string1 = "Estudar ";
let string2 = "é bom!";

console.log(string1 + string2);

let numero3 = 48;
console.log(string1 + string2 + " " + numero3);

// 5- Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
let nome = prompt("Digite seu nome");
console.log("Bem vindo " + nome);

// 6- Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número inteiro
let idade = prompt("Digite sua idade");
console.log(parseInt(idade));

// 7- Receba um número inteiro do usuário e converta-o em um número decimal (float).
let numero4 = prompt("Digite um número");
console.log(parseFloat(numero4).toFixed(2));

// 8- Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
let numero5 = prompt("Digite um número");
let numero6 = prompt("Digite outro número");

let soma = parseInt(numero5) + parseInt(numero6);
console.log(soma);

// 9- Receba um número decimal do usuário e calcule o seu quadrado.
let numero7 = prompt("Digite um número");
let quadrado = numero7 * numero7;
console.log(quadrado);

// 10- Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
let ano = prompt("Digite o ano de nascimento");
let idade2 = 2023 - ano;
console.log(idade2);

// 11- Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida, concatene-os em uma única string e exiba o nome completo.
let nome1 = prompt("Digite seu primeiro nome");
let sobrenome = prompt("Digite seu sobrenome");

let nomeCompleto = nome1 + " " + sobrenome;
console.log(nomeCompleto);  

// 12- Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números foram digitados.
const numeros = prompt("Digite uma sequencia de números separados por espaço");

console.log(numeros.split(" ").length);

// 13- Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual animal foi digitado.
const animal = prompt("Digite o nome de um animal");
console.log(`O animal digitado foi: ${animal}`)

// 14- Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo invertido (sobrenome, nome).
 const nome2 = prompt("Digite o seu nome");
 const sobrenome2 = prompt("Digite o seu sobrenome");
 
 let nomeCompleto2 = sobrenome2 + ", " + nome2;
 console.log(nomeCompleto2);

// 15- Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).

const string3 = prompt("Digite uma string");
console.log(string3.length);

// 16- Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.
const numero8 = prompt("Digite um número");
console.log(parseInt(numero8) % 2 === 0 ? "Par": "Impar");

// 17- Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
const numero9 = prompt("Digite um número");
console.log(parseInt(numero9) > 0 ? "Positivo" : "Negativo");


// 18- Peça ao usuário que insira dois números e exiba o maior deles.

const numero10 = prompt("Digite um número");
const numero11 = prompt("Digite outro número");

console.log(Math.max(numero10, numero11));

// 19- Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.

const altura = prompt("Digite a altura em metros");
const peso = prompt("Digite o peso em kg");

let imc = peso / (altura * altura);
console.log(imc);

// 20- Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.

const nome3 = prompt("Digite o seu nome");
console.log(nome3.length > 5? "O nome digitado é maior que 5 caracteres" : "O nome digitado é menor que 5 caracteres");