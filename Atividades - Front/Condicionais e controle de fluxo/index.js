// 1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.

const num = Number(prompt("Digite um numero"));

if (num > 0) {
    console.log("positivo");
} else if (num < 0) {
    console.log("negativo");
} else {
    console.log("zero");
}

// 2. Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.

const idade = Number(prompt("Digite sua idade"));
idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

// 3. Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são iguais.

const num1 = parseInt(prompt('Digite um numero inteiro'))
const num2 = parseInt(prompt('Digite outro numero inteiro'))

if (num1 > num2) {
    console.log(`${num1} > ${num2}`)
} else if (num1 < num2) {
    console.log(`${num1} < ${num2}`)
} else {
    console.log(`${num1} = ${num2}`)
}

// 4. Faça um programa que verifique se um número é par ou ímpar.
const number = Number(prompt("Digite um numero"));

number % 2 === 0 ? console.log("Seu numero é par") : console.log("Seu numero é impar");

// 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o aluno está aprovado (média maior ou igual a 7) ou reprovado.

alert("Vamos calcular a média do aluno");

const n1 = Number(prompt("Digite a nota"));
const n2 = Number(prompt("Digite a nota"));
const n3 = Number(prompt("Digite a nota"));

const media = (n1 + n2 + n3) / 3;

media >= 7 ? console.log("Aprovado, " + `sua media foi ${media.toFixed(2)}`) : console.log("Reprovado" + `sua media foi ${media.toFixed(2)}`)

// 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número de caracteres em seu nome.

const nome1 = prompt("Digite um nome")
const nome2 = prompt("Digite outro nome")

if(nome1.length > nome2.length){
    console.log(nome1 + " tem mais caracteres que " + nome2)
} else if(nome1.length < nome2.length){
    console.log(nome2 + " tem mais caracteres que " + nome1)
} else {
    console.log("Os nomes tem a mesma quantidade de caracteres")
}

// 7. Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.

const letra = prompt("Digite uma letra");

if(letra.toLowerCase() === "a" || letra.toLowerCase() === "e" || letra.toLowerCase() === "i" || letra.toLowerCase() === "o" || letra.toLowerCase() === "u"){
    console.log("Essa letra é uma vogal")
} else {
    console.log("Esta letra é uma consoante")
}

// 8. Faça um programa que receba três números e os imprima em ordem crescente.

const num01 = Number(prompt("Digite um numero"))
const num02 = Number(prompt("Digite um numero"))
const num03 = Number(prompt("Digite um numero"))

if (num01 < num02 && num0 < num03) {
    console.log(num01)
    if (num02 < num03) {
        console.log(num02)
        console.log(num03)
    } else {
        console.log(num03)
        console.log(num02)
    }
}else if (num02< num01 && num02< num03) {
    console.log(num02)
    if (num01 > num03) {
        console.log(num01)
        console.log(num03)
    } else {
        console.log(num03)
        console.log(num01)
    }
}else {
    console.log(num03)
        if (num01 < num02) {
            console.log(num01)
            console.log(num02)
        } else {
            console.log(num02)
            console.log(num01)
        }
}

// 9. Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso, obesa ou muito obesa.

const peso = Number(prompt('Digite seu peso em kg'))
const altura = Number(prompt('Digite sua altura em metros'))

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Você esta abaixo do peso")
} else if (imc >= 18.5 && imc <=24.9){
    console.log("Você esta no peso ideal")
} else if (imc > 24.9 && imc <=29.9){
    console.log("Você esta com sobrepeso")
} else{
    console.log("Você esta com obesidade")
}

// 10. Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês correspondente.

const numeroMes = Number(prompt("Digite um numere relacionado ao mes (1-12)"));
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho","Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

if(numeroMes >=1 && numeroMes <=12) {
    console.log(meses[numeroMes-1])
}else{
    console.log("Mes invalido")
}

// 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de 15%.

const salario = Number(prompt("Digite seu salario"))

if (salario <= 1500) {
    console.log("Você recebeu um aumento de 15%")
    console.log((salario*0.15) + salario)
}else{
    console.log("Você recebeu um aumento de 10%")
    console.log((salario*0.10) + salario)
}

// 12. Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo, exibindo uma mensagem apropriada.

const numIn = Number(prompt("Digite um numero inteiro"))

if (numIn % 3 === 0 && numIn %5 === 0) {
    console.log("O numero é divisivel por 3 e 5")
}else if (numIn % 5 === 0 && numIn % 3 !== 0){
    console.log("O numero é divisivel por 5")
}else if (numIn % 3 ===0 && numIn % 5 !== 0){
    console.log("O numero é divisivel por 3")
} else {
    console.log("O numero não é divisivel por 3 ou 5")
}

// 13. Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem informando se é um dia útil ou um fim de semana.

const day = prompt("Digite o dia da semana por extenso")

switch (day.toLocaleLowerCase()) {
    case "segunda":
        console.log("dia util");
        break
    case "terça":
        console.log("dia util");
        break;
    case "quarta":
        console.log("dia util");
        break;
    case "quinta":
        console.log("dia util");
        break;
    case "sexta":
        console.log("dia util");
        break;
    case "sabado":
        console.log("fim de semana");
        break;
    case "domingo":
        console.log("fim de semana");
        break;
    default:
        console.log("dia invalido");
}

// 14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom","Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando switch/case.

const star = Number(prompt("Digite um numero de 1 a 5"))

switch (star) { 
    case 5:
        console.log("Muito bom")
        break;
    case 4:
        console.log("Bom")
        break;
    case 3:
        console.log("Regular")
        break;
    case 2:
        console.log("Insuficiente")
        break;
    case 1:
        console.log("Muito Insuficiente")
        break;
    default:
        console.log("Valor invalido")
        break;
}

// 15. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -Domingo, 2 - Segunda-feira, etc.).

const weekDay = Number(prompt('Digite o numero correspondente ao dia da semana (1-7)'))

switch (weekDay) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    case 7:
        console.log('Sabado')
        break
    default:
        console.log('Valor invalido')
}