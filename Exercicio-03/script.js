// Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let valorInicial = Number(prompt("Digite o valor INICIAL da contagem"));
let valorFinal = Number(prompt("Digite o valor FINAL da contagem"));
let incremento = Number(prompt("Digite o incremento da contagem"));

for (; valorInicial <= valorFinal; ) {
  valorInicial = valorInicial + incremento;
  document.write(`Contagem: ${valorInicial}<br>`);
}
