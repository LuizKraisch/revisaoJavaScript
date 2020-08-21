const filhas = ['Uaeleskah', 'Cibalena']
const filhos = ['Uaxinton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano')
//'fulano' será adicionado ao final no novo array
console.log(todos, filhas, filhos)

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))