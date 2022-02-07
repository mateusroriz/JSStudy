const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar() 


const falarFora = pessoa.falar
falarFora() //conflito entre paradigmas: funcional e OO


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
