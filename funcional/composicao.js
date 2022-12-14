function composicao(...fns) {
    return (valor) => {
        return fns.reduce(async (acc, fn) => {
            // Verificando se a função é uma Promise:
            if (Promise.resolve(acc) === acc) {
                return fn(await acc)
            }
            return fn(acc)

        }, valor)
    }
}

const gritar = (texto) => {
    return texto.toUpperCase()
}

const enfatizar = (texto) => {
    return `${texto}!!!!`
}

const tornarLento = (texto) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(texto.split('').join(' '))
        }, 3000)
    })
}

// Criar versões de execução

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)

const umPoucoMenosExagerado = composicao(
    gritar,
    enfatizar
)

exagerado('PARA').then(console.log)
umPoucoMenosExagerado('CUIDADO').then(console.log)
