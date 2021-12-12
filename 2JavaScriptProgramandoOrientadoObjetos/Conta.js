export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    //funcoes ou metodos
    sacar(valor) {
        let taxa = 1;
      return  this._sacar(valor, taxa); //metodo dentro da propria classe precisa do this // return para retornar o novo valor retornado pelo _sacar 
    }

    _sacar(valor, taxa) { //fazendo um metodo para sacar privado para diminuir repetição de codigo
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        // retornar 0 quando nao tiver saldo suficiente
        return 0;
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
    }

}