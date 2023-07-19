/* 
# O que é uma variavel? 

Variável é um espaço reservado na memoria do computador em qual armazenamos um tipo de dado.

# Diferença entre const, let e var:

Usamos const, let e var para declarar variaveis no Javascript, eles tem tem diferenças:
Usamos o const para declarar variaveis constantes, cujos os quais os valores nao serão alterados, como a variavel pi no exemplo abaixo:

const pi = 3.1415
pi = 3

No caso o valor de pi é constante ao tentar atribuir-se outro valor temos um erro.

Já o let utilizamos para declarar variaveis de escopo local com valores que podem ser redefinidos, veja o exemplo abaixo:

let nome = "Thallysson";
nome = "João";
console.log(nome)

Nesse exemplo eu atribui um novo valor para a variavel nome, ao executar o consolog temos "João" mostrado no console

Já o Var, atualmente não usamos ele, ele assim como o let pode ter seu valor alterado portanto tem-se uma diferença de escopo, ao declarar-se uma variavel uma variavel usando var o escopo dela é global podendo então ser acessado de qualquer lugar do codigo.

# Diferença entre Objeto e Array

Objeto é um tipo de dado que armazena chaves e valores. ex:
let pessoa = {
    nome:"thallysson",
    idade:"21",
}
O Array é uma lista. ex: 
let numeros = [1, 2, 3, 4]

*/


/* STRING */
let nome = "Thallysson"
console.log(nome)

let frase = "Olá mundo!!"
console.log(frase.length)

let palavra = "qualquer"
console.log(palavra[0])

console.log(frase.toUpperCase())

let endereço = "Limoeiro, Pernambuco"
endereço = "Campinas, São Paulo"

console.log(endereço)

/* --------------------------------------------------------------------- */

/* Integer e float */

const PI = 3.14149;

let y = PI;

const taxaJuros = 0.05;

let x = 5;
let z = 3;

console.log(x+z);
console.log(x-z);
console.log(x*z);
console.log(x/z);

/* ------------------------------------------------------------------- */

/* Boolean */ 

let estaChovendo = true;
let verdadeiro = true;
let falso = false;

let temperatura = 27;
console.log("Temperatura é maior que 30ºC?");
console.log(temperatura > 30 ? "SIM" : "NÃO");

let resultado = 10 > 5;
console.log(resultado);

let teste = 25 < 15;
console.log(teste)


/* -------------------------------------------------------------------------------------- */

/* Objeto */

let pessoa = {
    nome: 'Thallysson',
    idade: 21,
    endereco:'Limoeiro, Pernambuco'
};

console.log(pessoa.nome);

pessoa = {...pessoa, profissao: "Engenheiro"};

console.log(pessoa);

pessoa.idade = 30;

let animal = {
    nome:"Gato",
    especie:"Felineo",
    cor: "Preto",
};

let livro = {titulo:"JavaScript Eloquente", autor:"Marijin Haverbeke", ano:2018};
console.log(livro.autor);
livro.ano = 2020;

delete livro.titulo
console.log(livro)

let carro = {
    marca: "Chevrolet",
    modelo:"sedan",
    ano:2012
};

carro.modelo = undefined;

console.log(carro)
console.log(carro.modelo)

/* --------------------------------------------------------------------------------------- */

/* Outros tipos */

let variavelNull = null;
let variavelUndefined;

console.log(variavelNull == null);
console.log(variavelUndefined == undefined);
console.log(variavelNull == 'null');
console.log(variavelUndefined == 'undefined');

let obj = {nome: undefined}
console.log(obj)

/* --------------------------------------------------------------------------------------- */

/* ARRAY */

let numeros = [1,2,3,4];

console.log(numeros[1]);

numeros[2] = 10
console.log(numeros)

numeros.pop();
console.log(numeros);

console.log(numeros.length)

let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]);

frutas.push("uva")
console.log(frutas)

let aluno = {
    nome: "Judas",
    idade:10,
}

let alunos = [aluno]

console.log(alunos[0].nome)

alunos = [...alunos, {nome:"Michel", idade:21},{nome:"Ana", idade:31},{nome:"Rafa", idade:18},]
console.log(alunos)

let produtos = ["Feijão", "Arroz", "Macarrão", "Detergente", "Molho de tomate", "Sabão", "Biscoito", "Salgadinho", "Vinho", "Frango"]

let produtosPares = produtos.forEach((produto, index)=>{ if ((index+1) % 2 === 0){ console.log(produto)}});

console.log(produtosPares);

/* ------------------------------------------------------------------------------------- */

/* Typeoff */

let numero = 10;
console.log("numero:", typeof numero);

let texto = "Qualquer";
console.log("texto:", typeof texto)

let booleano = true;
console.log("booleano:", typeof booleano);

let array = [];
console.log("array:", typeof array);

let objeto = {};
console.log("objeto:", typeof objeto)

let nulo = null;
console.log("nulo:", typeof nulo)

let indefinido;
console.log("indefinido:", typeof indefinido)

/* ------------------------------------------------------------------------------------- */

/* Operadores Logicos */

console.log("5 = 5:",5 == 5);

console.log("5 diferente de 5:", 5 != 5);

console.log("4 > 8", 4 > 8);

console.log("4 < 8", 4 < 8);

console.log("5 >= 1",5 >= 1);

console.log("4 <= 4:",4 <= 4);

console.log("5=5 e 8=8:",5 == 5 && 8==8);

console.log("5=5 ou 8=7:",5 == 5 || 8 == 7);