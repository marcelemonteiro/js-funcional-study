/*
    O método Array.map() permite a você iterar sobre o array e modificar 
    seus elementos usando uma função de callback. 
    A função de callback será executada em cada um dos elementos do array.

    map((element, index, array) => { ... })
*/

// Exemplo 1
const numeros = [1, 2, 3, 4];
const dobro = (elemento) => elemento * 2;
const numerosEmDobro = numeros.map(dobro);
// console.log(numerosEmDobro); // [2, 4, 6, 8]

// Exemplo 2
const carrinho = [
    { nome: 'Caneta', qtde: 2, preco: 1.99 },
    { nome: 'Caderno', qtde: 3, preco: 15.50 },
    { nome: 'Estojo', qtde: 1, preco: 24.99 }
];

const getNomes = (el) => el.nome;
const produtos = carrinho.map(getNomes);
// console.log(produtos); // ['Caneta', 'Caderno', 'Estojo']

const getPrecoTotal = (el) => el.qtde * el.preco;
const precoTotalPorProduto = carrinho.map(getPrecoTotal);
// console.log(precoTotalPorProduto); // [ 3.98, 46.5, 24.99 ]

// Exemplo 3 - implementando um map
Array.prototype.meuMap = function (cb) {
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        novoArray.push(cb(this[i], i, this));
    }
    return novoArray;
}

const triplica = (num) => num * 3;
console.log(numeros.meuMap(triplica)); // [ 3, 6, 9, 12 ]






