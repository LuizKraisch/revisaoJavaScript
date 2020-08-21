function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //como um loop, a cada 1 seg
}

new Pessoa

// Exemplo para evitar o desvio do this. Tanto pelo bind quanto pela const self