console.log(typeof Array, typeof new Array, typeof []) // ultimo se trata da versão literal de escrita, a recomendada.

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // forma mais comum de adicionar um novo elemento no final de um array
console.log(aprovados.length)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // 1º indice, 2º quantos elementos a frente, contando o indice, vai deletar/adicionar, 3º valor do novo elemento
console.log(aprovados)






/*for (x=3; x<4; x++) {
    aprovados[x] = prompt ('Informe um nome');
}

console.log(aprovados)*/

