/*
    The flatMap() method returns a new array formed by applying a given 
    callback function to each element of the array, and then flattening 
    the result by one level. It is identical to a map() followed by a 
    flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient 
    than calling those two methods separately.
*/

const letrasAninhadas = [
    ['O', ['l'], 'á'],
    [' '],
    ['M', ['u', 'n'], 'd', 'o'],
    ['!', '!', '!', '!'],
]

// O método flat() junta todos os conteúdos dos array em um só nível
// console.log(letras.flat()) // ainda ficam os arrays do 3 nivel
// console.log(letras.flat().flat()) // agora pega os arrays do 3 nivel

const letras = letrasAninhadas.flat(Infinity) // pega todos os niveis!
// console.log(letras)

// O flatMap primeiro faz o map e depois o flat

const resultado = letrasAninhadas
    .flatMap(l => [l, ' '])
    .reduce((acc, l) => acc + l)

console.log(resultado)