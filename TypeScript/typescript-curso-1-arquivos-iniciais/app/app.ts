import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form'); //pegando a form do index.html

form.addEventListener('submit', event => { //quando o botao submit for clicado rodar o metodo adicionar do controller na form pegada antes
    event.preventDefault(); //prevenindo a pagina de ser recarregada
    controller.adiciona();
});