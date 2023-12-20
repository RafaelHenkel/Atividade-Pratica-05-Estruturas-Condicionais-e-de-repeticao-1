// Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distanciaPercorida = Number(prompt("Digite a distancia percorrida"));

if (distanciaPercorida < 200) {
  let calculoPassagem = distanciaPercorida * 0.5;
  document.write(
    `Distancia percorrida ${distanciaPercorida} preço a pagar R$ ${calculoPassagem.toFixed(
      2
    )}`
  );
} else {
  let calculoPassagem = distanciaPercorida * 0.45;
  document.write(
    `Distancia percorrida ${distanciaPercorida} preço a pagar R$ ${calculoPassagem.toFixed(
      2
    )}`
  );
}
