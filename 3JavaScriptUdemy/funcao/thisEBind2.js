function Pessoa() {
    this.idade = 0

    //usando o bind para amarrar o funcao dentro do setInterval para a funcao Pessoa
    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)

    //Usando uma constante self para apontar para a classe pessoa e colocando ela no lugar de this dentro da funcao dentro de SetInterval
    const self = this;
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)

}


new Pessoa