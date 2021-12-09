import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //atributos
    static numerosDeContas = 0; //referencia todas as instancias daquela classe

    _cliente;
    agencia;
    //#saldo eh private field
    _saldo = 0;

    set cliente(novoValor) { //setter para cliente
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente; //usando o acessor(setter) cliente para fazer a verificacao no construtor
        ContaCorrente.numerosDeContas++;
    }


    //funcoes ou metodos
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {//so executar quando for o correto caso contrario so retornar 
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        //conta.depositar(this.sacar(valor)); dumb simplification?
    }
}