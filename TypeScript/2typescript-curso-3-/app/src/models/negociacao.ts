import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao>{
    
    constructor(private _data: Date, public readonly quantidade: number, public readonly valor: number) { 
        //passando os atributos da classe dentro do construtor 
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const copiaData = new Date(this._data.getTime()); //copiando data para uma nova referencia para impedir da data ser modificada
        return copiaData; //retornando copia da data
    }

    paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    ehIgual(negocicao: Negociacao) :boolean{
        return this.data.getDate() === negocicao.data.getDate() &&
        this.data.getMonth() === negocicao.data.getMonth() &&
        this.data.getFullYear() === negocicao.data.getFullYear();
    }

}

