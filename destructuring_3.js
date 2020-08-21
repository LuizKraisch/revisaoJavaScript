function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor) //arredondar para baixo
} //está em chaves pois será passado um objeto para essa função.

const obj = { max: 50, min: 40 }
console.log(rand(obj)) //limita conforme o obj.
console.log(rand({ min: 955 })) //limite somente o min.
console.log(rand({})) //sem nenhum paramentro, somente o predefinido.
