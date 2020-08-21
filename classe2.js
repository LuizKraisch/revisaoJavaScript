class Avo {
    constructor(sobrenome) {
        this.sobrenome
    }
}

class Pai extends Avo { //Pai se torna um prototipo de Avo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //instancia o sobrenome da classe Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)