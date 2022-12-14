/*
    O método Array.filter() permite filtrar os elementos de um array usando 
    uma função callback (que retorna true ou false), gerando um novo 
    array com os elementos filtrados.

    map((element, index, array) => { ... })
*/

// Exemplo 1
const carrinho = [
    { nome: 'Caneta', qtde: 2, preco: 1.99 },
    { nome: 'Caderno', qtde: 3, preco: 15.50 },
    { nome: 'Estojo', qtde: 1, preco: 24.99 },
    { nome: 'Mochila', qtde: 0, preco: 110 },
];
const qtdeMaiorQueZero = (item) => item.qtde > 0;
const getNome = (item) => item.nome;
const itensValidos = carrinho.filter(qtdeMaiorQueZero);
// Também é possível misturar métodos
const itensValidosNomes = carrinho
    .map(getNome)
    .filter(qtdeMaiorQueZero);


// Exemplo 2 - implementando um filter
Array.prototype.meuFilter = function (cb) {
    const novoArray = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            novoArray.push(this[i]);
        }
    }

    return novoArray;
}

const itensValidos2 = carrinho.meuFilter(qtdeMaiorQueZero);



