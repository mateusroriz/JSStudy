let dobro = function (a) { //funcao normal
    return 2 * a
}

dobro = (a) => { //arrow function
    return 2 * a
}

dobro = a => 2 * a //se tiver apenas um parametro ela n precisa de paranteses e retorno eh implicito se nao tem chaves

console.log(dobro(Math.PI))

let ola = function (){
    return 'ola'
}

ola = () => 'ola' 
ola = _ => 'ola' //possui um param

console.log(ola())