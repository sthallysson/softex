const CalcularIdade = () => {
  try {
    let nascimento;
    const nome = prompt("Digite seu nome completo:");

    while (isNaN(nascimento) || nascimento < 1922 || nascimento > 2021) {
      nascimento = parseInt(
        prompt("Digite um ano de nascimento entre 1922 e 2021")
      );

      if (isNaN(nascimento) || nascimento < 1922 || nascimento > 2021) {
        alert("Numero Invalido!");
      } else {
        const idade = 2022 - nascimento;
        alert(`Olá, ${nome} em 2022 você tem ${idade} anos.`);
      }
    }
  } catch (e) {
    alert("Ocorreu um erro: " + e.message);
  }
};

CalcularIdade();
