import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";



const cliente1 = new Cliente("Ricardo", 11122233308);

const contaCorrenteRicardo = new ContaCorrente(0, 1001, cliente1);
contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca)
console.log(contaCorrenteRicardo);

