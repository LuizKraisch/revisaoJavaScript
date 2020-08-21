const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lápis", "preco": 24.50 }',
    '{"nome": "Caneta", "preco": 7.90 }'
]

const paraObjeto = json => JSON.parse(json)
//converte o carrinho, que está em JSON, para objeto.
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)