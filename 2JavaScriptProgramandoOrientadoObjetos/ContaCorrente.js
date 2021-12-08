export class ContaCorrente {
    agencia;
    cliente;
    //#saldo eh private field
    _saldo = 0;

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