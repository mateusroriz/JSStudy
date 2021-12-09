import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//objetos

const cliente1 = new Cliente("Ricardo", 11122233308);
const cliente2 = new Cliente("Alice", 33322233308);
console.log(cliente2.cpf);

let numeroDeContas = 0;

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(1000);

const conta2 = new ContaCorrente(102, cliente2);


contaCorrenteRicardo.transferir(200, conta2);


console.log(cliente2);
console.log(ContaCorrente.numerosDeContas);


// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(-100);
// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(valorSacado);

// console.log(contaCorrenteRicardo);


