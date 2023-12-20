// Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let largura = Number(prompt("Digite a largura do seu terreno"));
let comprimento = Number(prompt("Digite o comprimento do seu terreno"));
let metrosQuadrados = largura * comprimento;

if (metrosQuadrados < 100) {
  document.write(`TERRENO POPULAR ${metrosQuadrados}m2`);
} else if (metrosQuadrados < 500) {
  document.write(`TERRENO MASTER ${metrosQuadrados}m2`);
} else {
  document.write(`TERRENO VIP ${metrosQuadrados}m2`);
}
