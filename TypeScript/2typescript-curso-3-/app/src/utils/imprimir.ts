import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Array<Imprimivel>){ //generics para permitir apenas imprimiveis na funcao imprimir
    for (let objeto of objetos){
        console.log(objeto.paraTexto());
    }
}