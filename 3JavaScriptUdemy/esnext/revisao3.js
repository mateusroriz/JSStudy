// ES8: Object.values/ Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhories na Notacao Literal
const nome  = 'Anon'
const pessoa = {
    nome,
    ola(){
        return 'oi'
    }
}
console.log(pessoa.nome, pessoa.ola())


// Class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return "Latir"
    }
}

//criando objetos a partir de uma classe usando a palavra reservada new
console.log(new Cachorro().falar())