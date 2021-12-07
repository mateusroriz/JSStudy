//molde
class Cliente {
    nome;
    cpf;
    ContaCorrente;
}

class ContaCorrente {
    agencia;
    //#saldo eh private field
    _saldo = 0;

    //funcoes ou metodos
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}



//objetos
const ContaCorrenteRicardo = new ContaCorrente();

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233308;
cliente1.ContaCorrente = ContaCorrenteRicardo;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "33322233308";

ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(-100);


const valorSacado = ContaCorrenteRicardo.sacar(50);
console.log(valorSacado);


console.log(ContaCorrenteRicardo);
