function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //é possível fazer trocas com operador destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arredondar para baixo
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand()) //irá dar erro pois não atribuiu os limitadores