export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const copiaData = new Date(this._data.getTime());
        return copiaData;
    }
    paraTexto() {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    ehIgual(negocicao) {
        return this.data.getDate() === negocicao.data.getDate() &&
            this.data.getMonth() === negocicao.data.getMonth() &&
            this.data.getFullYear() === negocicao.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map