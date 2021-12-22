export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const copiaData = new Date(this._data.getTime()); //copiando data para uma nova referencia para impedir da data ser modificada
        return copiaData; //retornando copia da data
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    //metodo statico pertence a classe nao a uma instancia
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g; //regex for formating date
        const data = new Date(dataString.replace(exp, ",")); //trocando - no data por ,
        const quantidade = parseInt(quantidadeString); //convertando string para int
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor); //adicionando os valores pegados na dom para uma nova classe negociacao
    }
}
