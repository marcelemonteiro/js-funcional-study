/*
    É um objeto usado para realizar processamentos assíncronos, esse objeto 
    guarda um valor que pode estar disponível agora, no futuro ou nunca. 
    Isso permite o tratamento de eventos ou ações que acontecem de forma 
    assíncrona em casos de sucessos ou falhas.

    Resumidamente o que é uma Promise: um objeto que faz processamentos e tratamentos 
    de eventos ou ações assíncronas.

    Uma Promise pode assumir três estados:
    - pending: estado inicial, nem cumprido nem rejeitado.
    - fulfilled: significa que a operação foi concluída com sucesso.
    - rejected: significa que a operação falhou.
*/

// Exemplo 1
const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10); // valor que será retornado e que vou poder acessar com o método then
    }, 2000);
})

// pro
//     .then(value => value * 9)
//     .then(value => console.log(value));
// e posso ir encadeando then's


// Exemplo 2
function gerarNumeroEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, tempo);
    })
}

// gerarNumeroEntre(10, 20, 2000).then(console.log)

// Exemplo 3 - Promise.all()
function gerarVariosNumeros() {
    // Depois de resolver todas essas promises o them seja executado
    return Promise.all([
        gerarNumeroEntre(1, 60, 1000),
        gerarNumeroEntre(1, 60, 500),
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(1, 60, 1500),
    ]);
}

// gerarVariosNumeros().then(console.log)

/*
    Tratamaneto de erro em Promises: reject e catch
*/

function testeErro(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (chanceErro > Math.random()) {
            reject('Ocorreu um erro..');
        } else {
            resolve(valor);
        }
    });
}

testeErro('Tudo certo', 0.5)
    .then(
        v => console.log(v),
        err => console.log(`Erro expec.: ${err}`)
    )
    .catch(console.log)

