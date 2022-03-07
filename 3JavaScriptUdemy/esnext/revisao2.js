// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) //o this nao pode ser sobreescrito em arrow functions
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log("parametro e mais forte")

// operador rest
function total(...numeros) { //agrupa todos os parametros passados em um array
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3,4,5))

{}