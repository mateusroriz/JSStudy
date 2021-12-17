import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() { //atribuindo os valores das propriedades no construtor
        this.inputData = document.querySelector('#data'); //pegando a propriedade data dentro do index.html //pegando elementos do DOM
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona() : void {
        const negociacao = this.criarNegociacao();
        negociacao.data.setDate(30);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    criarNegociacao() : Negociacao{
        const exp = /-/g; //regex for formating date
        const date = new Date(this.inputData.value.replace(exp, ",")); //trocando - no date por ,
        const quantidade = parseInt(this.inputQuantidade.value); //convertando string para int
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao( date, quantidade, valor); //adicionando os valores pegados na dom para uma nova classe negociacao
    }

    limparFormulario() : void{
        this.inputData.value = '';
        this.inputQuantidade.value= '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}