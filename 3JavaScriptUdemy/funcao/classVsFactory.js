//class
class Pessoa {
    constructor(nome) {
        this.nome = nome; //this faz a variavel ser publica
    }

    falar() {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa("Pedro")
p1.falar()


//factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome e ${nome}`) //nao precisa acessar nome com this por causa do contexto lexico
    }
}

const p2 = criarPessoa('Marcos')
p2.falar()