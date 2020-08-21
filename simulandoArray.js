const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

// Basicamente, a estrutura de um array. Mostrando como ele é realmente um objeto adaptado. quaseArray de trata de um objeto normal do JS.

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)