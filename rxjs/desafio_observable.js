/*
    Criar uma stream de números entre mim e max com Observable
*/

const { Observable } = require('rxjs')

const entre = (min, max) => {
    if (min > max) [min, max] = [max, min]
    return new Observable(subscriber => {
        // let num = min
        // while (num <= max) {
        //     subscriber.next(num)
        //     num++
        // }

        // De forma mais funcional e sem mutabilidade:
        Array(max - min + 1).fill().map((_, i) => {
            subscriber.next(min + i)
        })
        subscriber.complete()
    })
}

entre(4, 10)
    .subscribe(num => {
        console.log(`num = ${num}`)
    })