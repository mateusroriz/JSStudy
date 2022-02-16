function Pessoa (nome) {
        this.nome = nome; //this faz a variavel ser publica

    this.falar = function() {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa("Pedro")
p1.falar()
console.log(p1.nome) //temos acesso a essa variavel pois usamos o this e ela eh publica

/* como estava antes
class Pessoa {
    constructor(nome) {
        this.nome = nome; //this faz a variavel ser publica
    }

    falar() {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa("Pedro")
p1.falar() */