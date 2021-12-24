export class Negociacao {

    constructor(private _data: Date, private _quantidade: number, private _valor: number) { //passando os atributos da classe dentro do construtor 
    }


    get data(): Date {
        const copiaData = new Date(this._data.getTime()); //copiando data para uma nova referencia para impedir da data ser modificada
        return copiaData; //retornando copia da data
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {    //metodo statico pertence a classe nao a uma instancia
        const exp = /-/g; //regex para formatar a data
        const data = new Date(dataString.replace(exp, ",")); //trocando - no data por ,
        const quantidade = parseInt(quantidadeString); //convertando string para int
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor); //adicionando os valores pegados na dom para uma nova classe negociacao
    }

}