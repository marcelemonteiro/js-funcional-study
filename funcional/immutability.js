/*
    Na programação funcional se preza pelas variável imutáveis, ou seja, variáveis
    que não tem o seu valor reatribuído. 

    Ou seja, quando eu quero modificar o valor de uma variável, é preferível que eu
    faça uma cópia dela e aplique as modificações na cópia.
*/

// Exemplo 1) 
const frase = 'Oi, eu sou uma frase'
const fraseUpperCase = frase.toUpperCase()
console.log(frase, ' | ', fraseUpperCase)


// Exemplo 2)
const nums = [8, 1, 2, 3, 6]
/*
    O método sort ao invés de retornar um novo array, ele
    faz a alteração diretamente no array referenciado:
*/
const numsSort = nums.sort()
console.log('Sort ocasiona mutabilidade: ', nums, ' | ', numsSort)
/* 
    Para resolver isso, eu faço um clone do array,
    utilizando o operador Spread:
*/
const numsWithoutSort = [8, 1, 2, 3, 6]
const numsWithSort = [...numsWithoutSort].sort()
console.log('Usando sort sem mutabilidade: ', numsWithoutSort, ' | ', numsWithSort)

/*
    ! TODA QUE VEZ QUE VOCÊ FOR UTILIZAR UM MÉTODO QUE 
    ALTERA DIRETAMENTE UM ARRAY, LEMBRE-SE DE FAZER UMA 
    COPIA DO ARRAY E AÍ SIM APLICAR O MÉTODO NA CÓPIA ! ! !
*/


// Exemplo 3)
const numeros = [4, 5, 8, 4]

// Recursividade (dados imutáveis)
function somarArray2(array, total = 0) {
    if (!array) {
        return total
    }

    return somarArray2(array.slice(1), total + array[0])
}

// Reduce (dados imutáveis)
const somar = (a, b) => a + b
const resultado = numeros.reduce(somar)

// Dados mutáveis
let total = 0
for (let i = 0; i < numeros.length; i++) {
    total += numeros[i]
}


/*
    Com os dados imútaveis a gente evolui um array para outras versões ao invés de alterar
    o valor do mesmo.
*/



// Exemplo 4) Referência x Vlor

// Passagem por valor:
let a = 10
b = a
b = 8
console.log(a) // 10

// Passagem por referência:
const pessoa = { nome: 'Marcele', idade: 22, end: { rua: 'ABC' } }
const pessoa2 = pessoa // vai apontar para o mesmo objeto em memória
pessoa2.nome = 'Ana'
console.log(pessoa.nome) // 'Ana'

// Clone razo - apenas no primeiro nível (não funciona para objetos internos no objeto):
function alteraPessoa(pessoa) {
    const novaPessoa = { ...pessoa }
    novaPessoa.nome = 'Juliana'
    novaPessoa.idade = 82
    novaPessoa.end.rua = 'CBA'
    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(novaPessoa)
console.log(pessoa) // a prop end.rua foi alterada!

