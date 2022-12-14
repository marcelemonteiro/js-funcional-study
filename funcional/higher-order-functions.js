/*
    Uma higher order function é uma função que recebe uma outra como argumento, 
    ou uma função que retorna outra função.
*/

function executar(fn, ...params) {
    return fn(...params)
}

function somar(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b
}

const r1 = executar(somar, 1, 2, 3)
const r2 = executar(multi, 20, 5)
console.log(r1, r2)