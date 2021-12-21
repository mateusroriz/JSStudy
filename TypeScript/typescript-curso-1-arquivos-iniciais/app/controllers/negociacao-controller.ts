import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');  //negociacoesView vai ter que renderizar #negociacoesView
    private mensageView = new MensagemView('#mensagemView');
 
    constructor() { //atribuindo os valores das propriedades no construtor
        this.inputData = document.querySelector('#data'); //pegando a propriedade data dentro do index.html //pegando elementos do DOM
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes); //renderizando a tabela de negociacoes-view
    }

    adiciona(): void {
        const negociacao = this.criarNegociacao(); 
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensageView.update("Apenas negociacoes em dias uteis sao aceitas");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private criarNegociacao(): Negociacao {
        const exp = /-/g; //regex for formating date
        const data = new Date(this.inputData.value.replace(exp, ",")); //trocando - no data por ,
        const quantidade = parseInt(this.inputQuantidade.value); //convertando string para int
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor); //adicionando os valores pegados na dom para uma nova classe negociacao
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensageView.update("Negociação adicionada com sucesso");
    }

}
