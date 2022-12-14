/*
    Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer 
    expressão que retorne uma promessa. Dessa forma, a execução da função externa (a função async) 
    será pausada até que a Promise seja resolvida.

    !! O async/await também trabalha com o código assíncrono baseado em Promises, 
    porém esconde as promessas para que a leitura e a escrita seja mais fluídas.

    !! O async/await surgiu como uma opção mais "legível" ao .then()

    !! O await só pode ser utilizado DENTRO DE UM FUNÇÃO ASSÍNCRONA!
*/

// Exemplo 1
function esperarPor2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Testante...');
        }, 2000);
    })
}

async function teste() {
    await esperarPor2(); //-> Dessa forma a execução parecerá síncrona (uma linha executada por vez)
    console.log('Fim');
}
// teste();

// Exemplo 2 - Tratamento de erro
function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;

        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido');
        } else {
            resolve(aleatorio);
        }
    });
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = [];
        for (let _ in Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros));
        }
        return numeros;
    } catch (e) {
        if (tentativas > 10) {
            // reject dentro de uma função assíncrona
            throw "Não deu certo...";
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1);
        }

    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)