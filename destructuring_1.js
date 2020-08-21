const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}

const { nome, idade } = pessoa //operaodr destructuring
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //atribuição rápida
console.log(n, i)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) //não é criado o atributo endereco!