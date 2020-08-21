const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// como é constante, eu posso somente alterar os dados existentes, mas não adicionar e nem deletar.

pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // só início
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // início e final
console.log(algunsPilotos2)