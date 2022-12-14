/*
    Currying é o processo de transformar uma função que espera vários 
    argumentos em uma função que espera um único argumento e retorna 
    outra função curried. Por exemplo, uma função que recebe três 
    argumentos, ao sofrer currying, resulta em uma função que recebe um 
    argumento e retorna uma função que recebe um argumento, que por sua 
    vez retorna uma função que recebe um argumento e retorna o resultado 
    da função original.

    Aplicação parcial de uma função corresponde a chamar a função passando 
    menos argumentos do que a função recebe.
*/

// Versão 1 - Sem Currying:

function textoComTamanhoEntrevs1(min, max, erro, texto) {
    const tamanho = (texto || '').trim().length

    if (tamanho < min || tamanho > max) {
        throw erro
    }

}

const texto1 = 'Oie'
// console.log(textoComTamanhoEntrevs1(4, 100, 'Texto inválido', texto1))


// Versão 2 - Currying:

function textoComTamanhoEntrevs2(min) {
    return (max) => {
        return (erro) => {
            return (texto) => {
                const tamanho = (texto || '').trim().length

                if (tamanho < min || tamanho > max) {
                    throw erro
                }
            }
        }
    }
}

const forcarTamanhoPadroao = textoComTamanhoEntrevs2(4)(100)
const forcarTextoInvalido = forcarTamanhoPadroao('Texto invalido')
// console.log(forcarTextoInvalido(texto1))


// Versão 3 - Currying:

function aplicarValidacao(fn) {
    return (valor) => {
        try {
            fn(valor)
        } catch (err) {
            return { erro: err }
        }
    }
}

const validarTexto = aplicarValidacao(forcarTextoInvalido)
console.log(validarTexto('oioi'))
console.log(validarTexto('oi'))


