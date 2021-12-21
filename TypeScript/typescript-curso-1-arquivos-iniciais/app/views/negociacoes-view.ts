import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> { //herando da view e definindo o generics como Negociacoes


        protected template(model: Negociacoes): string {
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
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;
        })// .join('') //return all the strings as a unique string //this is doing nothing????
            } 
                </tbody>
            </table>
        `;
    }


    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().format(data)
    }
}

