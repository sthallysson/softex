/************ Obejtos Abstratos *************/
class Pessoa {
  constructor(nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
  }

  andar() {
    return "Andadando";
  }

  correr() {
    return "Correndo";
  }

  parar() {
    return "Parado";
  }
}

class Veiculo {
  constructor(modelo, marca, ano) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
  }

  trocarMarcha() {
    return "Você mudou a marcha";
  }

  acelerar() {
    return "Você acelerou";
  }

  frear() {
    return "Você freiou";
  }
}

/************ Obejtos Materiais *************/

const garrafa = {
  cor: "azul",
  bebida: "agua",
  estaVazia: true,

  encher() {
    return this.estaVazia ? false : true;
  },
  esvaziar() {
    return this.estaVazia ? true : false;
  },
};

const mousepad = {
  largura: 30,
  altura: 20,
  cor: "preto",

  tamanho() {
    return this.altura * this.largura;
  },
};
