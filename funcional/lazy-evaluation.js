function eager(a, b) {
    // processamento mais pesado
    const fim = Date.now() + 2500
    while (fim > Date.now()) { }

    const valor = Math.pow(a, 3)
    return valor + b
}

console.time('#1')
console.log(eager(3, 100))
console.log(eager(3, 200))
console.log(eager(3, 300))
console.timeEnd('#1') // 7.503s

function lazy(a) {
    // processamento mais pesado
    const fim = Date.now() + 2500
    while (fim > Date.now()) { }

    const valor = Math.pow(a, 3)
    return (b) => {
        return valor + b
    }
}

console.time('#2')
const lazy3 = lazy(3)
console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))
console.timeEnd('#2') // 2.500s
