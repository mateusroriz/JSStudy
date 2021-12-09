import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor){ //setter para cliente
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    //#saldo eh private field
    _saldo = 0;

    get saldo(){
        return this._saldo;
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

    transferir(valor, conta){
         const valorSacado = this.sacar(valor);
         conta.depositar(valorSacado);
         //conta.depositar(this.sacar(valor)); dumb simplification?
    }
}