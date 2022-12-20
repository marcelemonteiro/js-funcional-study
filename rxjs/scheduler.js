/*
    A Scheduler lets you define in what execution context will an
    Observable deliver notifications to its Observer.
*/

// asyncScheduler -> Ambiente de execução que será responsável por processar observables.
const { from, asyncScheduler } = require('rxjs')
const { observeOn } = require('rxjs/operators')

console.log('Início....')

// Execução Síncrona
from([1, 2, 3, 4, 5, 6, 7, 8, 9])
    // Com o asyncScheduler: execução assíncrona, mas o padrão é a execução síncrona mesmo.
    .pipe(observeOn(asyncScheduler))
    .subscribe(console.log)

console.log('Fim.....')