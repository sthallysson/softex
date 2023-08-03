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
console.log(`O animal digitado foi: ${animal}`);

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
console.log(parseInt(numero8) % 2 === 0 ? "Par" : "Impar");

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
console.log(
  nome3.length > 5
    ? "O nome digitado é maior que 5 caracteres"
    : "O nome digitado é menor que 5 caracteres"
);

// 21 -Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:"Você é casado(a)", "Você é solteiro(a)", etc.).

const relacionamento = prompt("Insira o seu estado civil");
alert(`Voce é ${relacionamento}`);

// 22-Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e exiba o resultado.

const base = prompt("Digite o tamanha da base");
const alturaR = prompt("Digite o tamanha da altura");
const area = base * alturaR;
alert(`A area do retangulo é: ${area}`);

// 23- Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de sua escolha).

const cidade = prompt("Digite o nome da cidade");
alert(cidade.toUpperCase().startsWith("S"));

//24- Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
alert("Digite dois numeros decimais para calcular o resto da sua divisão");
const num1 = parseFloat(prompt("Digite o primero numero"));
const num2 = parseFloat(prompt("Digite o segundo numero"));
const resto = num1 % num2;
alert(`O resto da divisão de ${num1} por ${num2} é: ${resto}`);

//25. Solicite ao usuário um número decimal e converta-o em um número inteiro.
const deciNum = Number(prompt("Digite um numero com casas decimais"));
alert(deciNum.toFixed());

// 26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o novamente para uma string antes de exibi-lo.
const stNum = prompt("Digite um numero inteiro");
const sum = Number(stNum) + 10;
alert(typeof sum.toString());

// 27- Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano separadamente, convertendo-os em números inteiros.
const data = prompt("Digite uma data no formado dd/mm/aaaa");
const dataSeparada = data.split("/");

const convertendoDatas = {
  dia: Number(dataSeparada[0]),
  mes: Number(dataSeparada[1]),
  ano: Number(dataSeparada[2]),
};

console.log(convertendoDatas);

// 28- Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma mensagem completa, como "Você mora em [cidade], [estado].".

const cidade1 = prompt("Digite sua cidade");
const estado = prompt("Digite seu estado");
alert(`Você mora em ${cidade1}, ${estado}`);

// 29. Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".

const nascimento = prompt("Qual é o seu ano de nascimento?");

alert(`Bem-vindo ao nosso programa, nascido em ${nascimento}!`);

// 30 Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única string, separando-os com um espaço.
const numInt = parseInt(prompt("Digite um numero inteiro"));
const string12 = prompt("Digite um texto");

alert(`${numInt} ${string12}`);

// 31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto, adicionando o símbolo de moeda da sua escolha.

const produto = prompt("De um nome ao produto");
const preco = Number(prompt("Digite o preço do produto"));

alert(`${produto} custa R$${preco.toFixed(2)}`);

//32- Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro desse número.

const thisNumber = parseInt(prompt("Digite um numero inteiro"));
alert(`O dobro de ${thisNumber} é ${thisNumber * 2}`);

// 33- Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de agradecimento personalizada.

const email = prompt("Digite seu email");
const message = "Obrigado por se cadastrar!";

const greeting = `Olá ${email}, ${message}`;

alert(greeting);

// 34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente(divisão inteira) entre eles.

const writeNumber1 = Number(prompt("Digite o primeiro numero"));
const writeNumber2 = Number(prompt("Digite o segundo numero"));

alert("A soma é: " + (writeNumber1 + writeNumber2));
alert("A diferença é: " + (writeNumber1 - writeNumber2));
alert("O produto é: " + writeNumber1 * writeNumber2);
alert("O quociente é: " + writeNumber1 / writeNumber2);

// 35- Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do triângulo.

alert("Vamos calcular a area de um triângulo");
const baseT = Number(prompt("Digite a base do triângulo"));
const alturaT = Number(prompt("Digite a altura do triângulo"));

const areaT = (baseT * alturaT) / 2;

alert("A area do triângulo é: " + areaT);

// 36. Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).

const input = prompt("Digite o raio da circunferência:");
const pi = Math.PI;
console.log(pi);
const perimetro = 2 * pi * input;
alert(`O perímetro da circunferência é: ${perimetro.toFixed(2)}`);

// 37. Receba os lados de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o perímetro do retângulo.

const lado1 = Number(prompt("Digite um lado do triangulo"));
const lado2 = Number(prompt("Digite outro lado do triangulo"));
const lado3 = Number(prompt("Digite outro lado do triangulo"));

const perimetro2 = lado1 + lado2 + lado3;

alert(`O perímetro do triângulo é ${perimetro2}`);

// 38- Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média aritmética desses números.
alert("Digite 3 numeros decimais para calcular sua media");

const deciNum1 = parseFloat(prompt("Digite o 1º numero decimal"));
const deciNum2 = parseFloat(prompt("Digite o 2º numero decimal"));
const deciNum3 = parseFloat(prompt("Digite o 3º numero decimal"));

const media = (deciNum1 + deciNum2 + deciNum3) / 3;

alert("A media aritmética desses números é: " + media);

// 39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já viveu (considerando um ano com 365 dias).

const idadeD = Number(prompt("Digite sua idade"));
const mesesLife = idadeD * 12;
const diasLife = idadeD * 365;

alert(`Você tem ${mesesLife} meses e ${diasLife} dias de vida`);

// 40. Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor para dólares e exiba o resultado.

const reais = Number(
  prompt("Digite um valor em real R$ para converter pra dolar U$")
);
const dolar = Number(prompt("Digite a cotação do dolar"));

const dolarConvertido = reais * dolar;

alert(`O valor de ${reais}R$ convertido para ${dolarConvertido} U$`);
// 41. Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.

const numDecimal = Number(
  prompt("Digite um numero decimal para ser arredondado")
);

const arredondado = Math.round(numDecimal);

alert(arredondado);

// 42- Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) *n3.

const n1 = parseInt(prompt("Digite um número:"));
const n2 = parseInt(prompt("Digite outro número:"));
const n3 = parseInt(prompt("Digite mais um número:"));

alert((n1 + n2) * n3);

// 43. Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando a fórmula: Fahrenheit = (Celsius * 9/5) + 32.

const celsius = Number(
  prompt(
    "Digite uma temperatura em graus Celsius para transforma-la em fahrenheit"
  )
);
const fahrenheit = (celsius * 9) / 5 + 32;

alert(
  `A temperatura de ${celsius} graus Celsius corresponde a ${fahrenheit} graus Fahrenheit`
);
