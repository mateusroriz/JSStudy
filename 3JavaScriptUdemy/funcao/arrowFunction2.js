function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ //this de arrow function nao varia //o this aponta para Pessoa pois foi escrito dentro dela
        console.log(this.idade)
    }, 1000)
}

new Pessoa