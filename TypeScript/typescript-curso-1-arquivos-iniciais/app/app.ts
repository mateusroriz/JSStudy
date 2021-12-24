import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form'); //pegando a form do index.html

if(form){ // se o form nao é nulo
    form.addEventListener('submit', event => { //quando o botao submit for clicado rodar o metodo adicionar do controller na form pegada antes
        event.preventDefault(); //prevenindo a pagina de ser recarregada
        controller.adiciona();
    });
}else{
    throw Error("nao foi possivel inicializar a aplicação verifique se o form existe")
}
