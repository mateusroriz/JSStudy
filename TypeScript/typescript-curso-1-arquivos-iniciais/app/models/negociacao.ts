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

    //metodo statico pertence a classe nao a uma instancia
    static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao { //metodo static pode ser chamado diretamente da classe 
        const exp = /-/g; //regex for formating date
        const data = new Date(dataString.replace(exp, ",")); //trocando - no data por ,
        const quantidade = parseInt(quantidadeString); //convertando string para int
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor); //adicionando os valores pegados na dom para uma nova classe negociacao
    }

}