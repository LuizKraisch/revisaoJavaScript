const saudacao = 'Opa'

function exec() {
    const saudacao = 'Fala'
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Lel',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)