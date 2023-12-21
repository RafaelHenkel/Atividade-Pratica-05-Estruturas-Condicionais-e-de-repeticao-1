// Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let contagemAlunos = 0;
let mediaAlunos = 0;
let acabar = 0;

while (acabar !== 999) {
  let idade = Number(
    prompt("Digite as idades dos alunos ou 999 para parar de digitar")
  );
  acabar = idade;
  mediaAlunos += idade;
  contagemAlunos++;
}
document.write(
  `Quantidade de alunos existetes na turma ${
    contagemAlunos - 1
  } e a media da idade dos alunos é ${
    (mediaAlunos - 999) / (contagemAlunos - 1)
  }`
);
