/*
    A Subject is a special type of Observable that allows values 
    to be multicasted to many Observers. Subjects are like EventEmitters.
*/

const { Observable, Subject } = require('rxjs')
// Unicast
function getObservable() {
    return new Observable((subscriber) => {
        setTimeout(() => {
            console.log('1# Observable')
            subscriber.next(Math.random())
            subscriber.complete()
        }, 1000)
    })
}

const obs = getObservable()
obs.subscribe(console.log)
obs.subscribe(console.log)


// Multicast
function getSubject() {
    const sub = new Subject()

    setTimeout(() => {
        console.log('1# Subject')
        sub.next(Math.random())
        sub.complete()
    }, 1000)

    return sub
}

const sub = getSubject()
sub.subscribe(console.log)
sub.subscribe(console.log)