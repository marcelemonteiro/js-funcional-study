/*
    RxJS é "uma biblioteca para construção de programas assíncronos 
    ou baseado em eventos, utilizando uma sequência de observables".
*/

// Alguns conceitos principais (Observable, Observer e Subscription):

/*
    Observable -> coleção invocável de valores ou eventos futuros.
*/
import { Observable } from 'rxjs';

const observable1 = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

console.log('just before subscribe');

// To invoke the Observable and see these values, we need to subscribe to it:
observable1.subscribe({
    next(x) {
        console.log('got value ' + x);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    },
});
console.log('just after subscribe');


/* 
    Observer -> coleção de callbacks (next, complete e error) 
    que vão ler os dados entregues pelos Observables.

    "Observers are just objects with three callbacks, one for 
    each type of notification that an Observable may deliver."
*/
const observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};


/*
    Subscription -> representa a execução de um Observable, é
    primariamente utilizado para cancelar a sua execução.
*/

const { interval, Subscription } = require('rxjs')

const observable2 = interval(1000)
const subscription1 = observable2.subscribe(x => console.log(x))
const subscription2 = observable2.subscribe(x => console.log(x * 2))

// Podemos encadear subscription utilizando o método add:
subscription1.add(subscription2)

// OU Juntar todas as subscritions em um único lugar:
const subscription = new Subscription()
sub.add(subscription1)
sub.add(subscription2)

// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe() // Finaliza todas as subscriptions adicionadas
// subscription1.unsubscribe() // Irá finalizar tanto o subscription1 quando o subscription2






