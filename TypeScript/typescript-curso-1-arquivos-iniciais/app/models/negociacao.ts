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
        return  this._valor;
        // return this._quantidade * this._valor;

    }

}