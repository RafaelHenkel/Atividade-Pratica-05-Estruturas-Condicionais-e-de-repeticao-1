// Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let salario = undefined;
let sexo = undefined;
let confirma = true;
let salarioMasculino = 0;
let salarioFeminino = 0;
do {
  salario = parseFloat(prompt("Digite o salario"));
  sexo = prompt("M para masculino | F para feminino");
  confirma = confirm("Você deseja continuar?");
  if (sexo == "M") {
    salarioMasculino += salario;
  } else if (sexo == "F") {
    salarioFeminino += salario;
  }
} while (confirma == true);
{
  document.write(
    `Salario total masculino R$${salarioMasculino.toFixed(2)} <br>`
  );
  document.write(`Salario total faminino R$${salarioFeminino.toFixed(2)}`);
}
