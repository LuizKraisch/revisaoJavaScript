function Pessoa() {
    this.idade = 0

    setInterval(() => { // arrow function com um this que não varia
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa