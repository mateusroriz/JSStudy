const pessoa = {
    nome: 'Anon',
    idade: 23,
    peso: 50
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

console.log()

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log()

//usando Destructuring 
Object.entries(pessoa).forEach(([chave, valor]) => { //desestruturando os elementos de um array 
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2001'
})

console.log()

pessoa.dataNascimento = '01/02/2055'
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))


// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }

const obj = Object.assign(dest, o1, o2)

console.log(dest)
console.log(obj)


Object.freeze(obj)
obj.c = 1234

console.log(obj)