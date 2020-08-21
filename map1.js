const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2
})

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

// Aqui irá chegar cada um dos maps e regando um único resultado com a "soma" dos outros.

console.log(resultado)