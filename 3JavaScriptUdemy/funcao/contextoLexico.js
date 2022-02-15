const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}


function exec(){
    const valor = 'Local' 
    minhaFuncao() //vai retornar global porque ela vai procurar no contexto que foi declarada(lexico) e nao no contexto que foi executada
}

exec()