export class Negociacoes {
    constructor() {
        this.negociacoes = []; //<> eh generics expecifica o tipo de objeto que vai dentro do array
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
