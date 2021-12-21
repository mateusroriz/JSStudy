import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView'); //negociacoesView vai ter que renderizar #negociacoesView
        this.mensageView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data'); //pegando a propriedade data dentro do index.html //pegando elementos do DOM
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes); //renderizando a tabela de negociacoes-view
    }
    adiciona() {
        const negociacao = this.criarNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensageView.update("Apenas negociacoes em dias uteis sao aceitas");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    criarNegociacao() {
        const exp = /-/g; //regex for formating date
        const data = new Date(this.inputData.value.replace(exp, ",")); //trocando - no data por ,
        const quantidade = parseInt(this.inputQuantidade.value); //convertando string para int
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor); //adicionando os valores pegados na dom para uma nova classe negociacao
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensageView.update("Negociação adicionada com sucesso");
    }
}
