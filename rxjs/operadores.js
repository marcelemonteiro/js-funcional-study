/*
    Operadores -> funções puras que permitem lidar com 
    coleção de forma funcional utilizando operações como 
    map, filter, concat, reduce e etc.
*/

// Existem dois tipos de operadores:

// 1) Operadores de criação -> Cria um Observable
const { from, of } = require('rxjs')

// 2) Operadores Encadeáveis (Pipeable Op.) -> Operadores que vão transformar os dados.
const { last, first, map, concatAll } = require('rxjs/operators')

/*
    Exemplo 1 
*/
of(1, 2, 'ana', false, 'ultimo')
    .pipe(last())
    .subscribe(valor => console.log(`Último valor: ${valor}`))

of(1, 2, 'ana', false, 'ultimo')
    .pipe(first())
    .subscribe(valor => console.log(`Primeiro valor: ${valor}`))

of(1, 2, 'ana', false, 'ultimo')
    .pipe(
        last(),
        map(valor => valor[0]),
        map(valor => `Primeira letra do último valor: ${valor}`)
    )
    .subscribe(console.log)


/*
    Exemplo 2 - Fazendo requisições a API
*/
const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')

console.log('Antes')

// Execução assíncrona!
ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/cod3rcursos/repos'
})
    .pipe(
        map(resp => JSON.parse(resp.xhr.responseText)),
        // O objetivo do concatAll é transformar higher-order observables em first-order
        concatAll(),
        map(repo => repo.full_name)
    )
    .subscribe(console.log)

console.log('Depois')

/*
    Exemplo 3 - Criando operadores encadeáveis
*/
const { Observable } = require('rxjs')

function createPipeableOperator(sourceSubscribe) {
    return (source) => {
        return new Observable((subscriber) => {
            source.subscribe(sourceSubscribe(subscriber))
        })
    }
}

const primeiro = () => createPipeableOperator((subscriber) => {
    return {
        next(valor) {
            subscriber.next(valor)
            subscriber.complete()
        }
    }
})

const nenhum = () => createPipeableOperator((subscriber) => {
    return {
        next(v) {
            subscriber.complete()
        }
    }
})

const ultimo = () => createPipeableOperator((subscriber) => {
    let ultimo
    return {
        next(v) {
            ultimo = v
        },
        complete() {
            if (ultimo !== undefined) {
                subscriber.next(ultimo)
            }
            subscriber.complete()
        }
    }
})

from([1, 2, 3])
    .pipe(primeiro())
    .subscribe(v => console.log(`Primeiro elemento: ${v}`))

from([1, 2, 3])
    .pipe(ultimo())
    .subscribe(v => console.log(`Último elemento: ${v}`))

from([1, 2, 3])
    .pipe(nenhum())
    .subscribe(v => console.log(`Nenhum: ${v}`))
