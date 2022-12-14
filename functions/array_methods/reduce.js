/*
    O método Array.reduce() permite iterar sobre um array e reduzi-lo a um único 
    valor usando uma função callback.

    reduce((accumulator, currentValue, currentIndex, array) => {  …  }, initialValue)

    accumulator -> resultado do processamento anterior (se eu passar um initialValue,
        o accumulator terá esse valor, caso contrário não terá retorno);
*/

// Exemplo 1
const nums = [1, 2, 3];
const soma = (acc, curr) => acc + curr;
const resultado = nums.reduce(soma);
console.log(resultado);

// Exemplo 2 - Implementando um reduce
Array.prototype.meuReduce = function (cb, inicial) {
    let acc = inicial;
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i];
        } else {
            acc = cb(acc, this[i], i, this);
        }
    }
    return acc;
}

const resultado2 = nums.meuReduce(soma);
console.log(resultado2);

const letras = ['o', 'l', 'á'];
const palavra = letras.reduce(soma);
console.log(palavra);