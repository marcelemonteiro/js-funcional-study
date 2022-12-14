/*
    Diz-se que um linguagem de programação possui funções
    de primeira classe quando as funções nessa linguagem são 
    tratadas como qualquer outra variável, como qualquer outro
    valor.
*/

const x = 3
const y = function (txt) {
    return `Esse é o texto: ${txt}`
}

console.log(x)
console.log(y('olá'))