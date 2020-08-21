const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

const pessoa2 = {
    saudacao: 'Bom Tarde!'
}


pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas da programação funcional e orientada a objetos

const falarDePessoa = pessoa.falar.bind(pessoa2) //ou pessoa
falarDePessoa()