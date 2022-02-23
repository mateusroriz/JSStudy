function Aula(nome, videoId) {
    this.nome = nome;
    this.videoId = videoId
}

const aula1 = new Aula('bem vindo', 123)
const aula2 = new Aula('ate logo', 456)
console.log(aula1, aula2)

// simulando o new
function novo(fun, ...params) {
    const obj = {}
    obj.__proto__ = fun.prototype
    fun.apply(obj, params) //executando uma funcao passando um valor this e parametros //params vai ser internamente dentro dessa funcao um array
    return obj
}

const aula3 = novo(Aula, 'comeco', 678)
const aula4 = novo(Aula, 'final', 789)
console.log(aula3, aula4)