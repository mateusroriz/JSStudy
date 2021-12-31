import { Modelo } from '../interfaces/modelo.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Modelo<Negociacoes>{

    private negociacoes : Array<Negociacao> = []; //<> eh generics expecifica o tipo de objeto que vai dentro do array

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    paraTexto() : string{
        return JSON.stringify(this.negociacoes, null, 2);
       }
   

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
