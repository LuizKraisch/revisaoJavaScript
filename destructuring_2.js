const [a] = [10] //NÃO é um array, e sim uma sintaxe para o destructuring.

console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9 , 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //primeiro foi ignorado, segundo é um vetor em que o primeiro foi ignorado
console.log(nota)