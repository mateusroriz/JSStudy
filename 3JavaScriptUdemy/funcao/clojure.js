//Clousre eh o escopo criado quando uma funcao e declarada 
//Esse escopo permite a funcao acessar e manipular variaveis externas a funcao

//Contexto lexico em acao

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) //retorna Local por que o clojure da funcao se lembra da variavel declarada quando foi definida