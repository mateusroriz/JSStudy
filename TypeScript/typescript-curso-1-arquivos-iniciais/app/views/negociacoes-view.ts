import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor); //retorna o elemento da DOM passado no parametro do construtor
    }

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => { //para cada item da lista retornado pelo map retornar eles como string
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;
        }).join('') //return all the strings as a unique string
            } 
                </tbody>
            </table>
        `;
    }
    update(model: Negociacoes): void { //renderizar o template no elemento q foi passado no construtor 
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;  //qualquer html jogado aqui vai ser transformado em DOM
    }

}

