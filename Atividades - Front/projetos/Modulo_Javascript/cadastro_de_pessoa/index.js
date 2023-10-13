// Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o código utilizando exemplos para cada variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos.

/* 
    Tipos das Variaveis

    nome: String,
    salario: Number,
    idade: Number,
    possuiDiploma: Boolean,
*/

function cadastro(nome, salario, idade, possuiDiploma) {
  return { nome, salario, idade, possuiDiploma };
}

const pessoa = cadastro("Thallysson Silva", 1500.55, 21, false);

console.log(pessoa);
