import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//objetos

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233308;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "33322233308";


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(1000);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;


contaCorrenteRicardo.transferir(200, conta2);

// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(-100);
// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(valorSacado);

console.log(contaCorrenteRicardo);
console.log(conta2);


 