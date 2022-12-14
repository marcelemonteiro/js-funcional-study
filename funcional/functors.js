// Functors são objetos que implementam a função map()
// que também é um 'wrapper' de um valor

// Array é um exemplo de functors
const nums = [1, 2, 3, 4]
const novosNums = nums
    .map(el => el + 10)
    .map(el => el * 2)
console.log(nums, novosNums)


function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if (this.invalido()) {
                return TipoSeguro(null)
            } else {
                const novoValor = fn(this.valor)
                return TipoSeguro(novoValor)
            }
        },
        flatMap(fn) {
            return this.map(fn).valor
        }
    }
}

const resultado = TipoSeguro('Isso é um texto')
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)
    .flatMap(t => t.split('').join(' '))

// console.log(resultado.valor)
console.log(resultado)