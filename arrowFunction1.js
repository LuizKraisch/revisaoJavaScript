let dobro = function (a) {
    return 2 * a
} 

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Quando existe um único paramêtro pode usar somente uma linha, return implícito

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um paramêtro, porém é ignorado

console.log(ola())