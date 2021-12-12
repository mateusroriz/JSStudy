import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numerosDeContas = 0; //referencia todas as instancias daquela classe

    constructor(cliente, agencia) {
        super(0, cliente, agencia); //chamando o construtor da classe pai dentro do construtor da classe filha
        ContaCorrente.numerosDeContas++;
        
    }

    //sobreescrevendo o comportamento de scar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor,taxa); //pode ser tanto this quanto super porque a classe nao está sendo sobreescrita,
        // entao ele vai simplismente chamar o da classe pai
    }

}