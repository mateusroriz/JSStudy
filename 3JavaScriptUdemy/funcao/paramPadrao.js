//extrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = (a || 1) //se a primeira opcao for falsa vai pra segunda
    b = (b || 1)
    c = (c || 1)
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0 , 0 , 0), soma1(false, false, false))

//estretegia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c){
    a = (a !== undefined ? a : 1) //se a for diferente de undefined vai pegar o proprio valor de a se nao pegar o valor 1
    b = (1 in arguments ? b : 1) //se o segundo argumento da funcao soma2 existir dentro de arguments pegue o valor de B se nao retorne 1
    c = (isNaN(c) ? 1 : c) //se c for non a number retorne 1 se nao retorne c

    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0, 0 ,0), soma2(false, false, false))

//valor padrao do es2015
function soma3(a =1 , b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0), soma3(false, false, false))
