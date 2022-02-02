//Funcao em JS é First-class citizen
//higher-order function

//criar de forma literal
function fun1() {}

//Armazenar em uma variavel
const fun2 = function() {} //constante recebe um funcao anonima

//Armazenar em um array
const array = [function (a,b) {return a+b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto 
const obj = {}
obj.falar = function() {return 'opa'}
console.log(obj.falar())

//Passar funcao como param
function run(fun){
    fun()
}

run(function() {console.log('executando funcao no parametro')})

// uma funcao pode retornar/conter uma funcao

function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2,3)(5)

const cincoMais = soma(2,3)
cincoMais(10)