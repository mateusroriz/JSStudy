//molde
export class Cliente {

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome; //atributos podem ser inicializados dentro de metodos
        this._cpf = cpf;
    }
}