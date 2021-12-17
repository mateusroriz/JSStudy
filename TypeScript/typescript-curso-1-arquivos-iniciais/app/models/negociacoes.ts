import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes : Array<Negociacao> = []; //<> eh generics expecifica o tipo de objeto que vai dentro do array
    
    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes; 
    }
}
