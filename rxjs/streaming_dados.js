/*
    Streaming de dados é "o processo de transmissão de um fluxo contínuo 
    de dados (também conhecido como stream) que normalmente é enviado a um 
    software de processamento de fluxo para gerar informações valiosas". 

    É basicamente uma série contínua de dados sendo enviados. O software irá
    receber os dados, um a um, de forma constante, ao invés de tudo de uma só vez.
*/

// Exemplo 1) Recebendo um número num dado intervalo de tempo
function gerarNumeros() {
    return {
        iniciar: (callback, tempo = 1000) => {
            let num = 0
            const intervalo = setInterval(() => {
                console.log(callback(num++))
            }, tempo)

            return {
                parar: () => clearInterval(intervalo)
            }
        }
    }
}

const t1 = gerarNumeros()
// const exec1 = t1.iniciar((num) => `1# ${num * 2}`)

const t2 = gerarNumeros()
// const exec2 = t2.iniciar((num) => `2# ${num * 100}`, 500)

// setTimeout(() => {
//     exec1.parar()
//     exec2.parar()
// }, 5000)


// Exemplo 2) Utilizando RxJS
const { interval } = require('rxjs')

const gerarNumerosRxJS = interval(1000)
const subscrition = gerarNumerosRxJS.subscribe((num) => {
    console.log(Math.pow(2, num))
})

setTimeout(() => {
    subscrition.unsubscribe()
}, 8000)
