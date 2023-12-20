// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto

// b. Mulheres ganham 13% de desconto

let nome = prompt("Digite seu nome");
let sexo = prompt("Sexo masculino ou feminino");
let valorCompras = Number(prompt("Digite o valor das suas compras"));
let valorDesconto = 0;
switch (sexo) {
  case "masculino":
    console.log(`Nome ${nome}`);
    console.log(`Sexo ${sexo}`);
    console.log(`Valor a pagar =  R$${valorCompras}`);
    valorDesconto = valorCompras * (5 / 100);
    console.log(
      `Valor a pagar com desconto = R$${valorCompras - valorDesconto}`
    );
    break;
  case "feminino":
    console.log(`Nome ${nome}`);
    console.log(`Sexo ${sexo}`);
    console.log(`Valor a pagar = R$${valorCompras}`);
    valorDesconto = valorCompras * (13 / 100);
    console.log(
      `Valor a pagar com desconto = R$${valorCompras - valorDesconto}`
    );
    break;
  default:
    console.log("Este sexo nao existe");
}
