/*
    Closure é quando uma função 'lembra' seu escopo léxico (escopo em que a 
    função foi definida físicamente no código), mesmo quando a função é
    executada fora desse escopo.
*/

const somarXmais3 = require('./closure-escopo')
const x = 1000

/*
    A função somarXmais3() vai pegar apenas o que está no 
    escopo em que ela foi criada (aqui no caso a variável x), 
    portanto a variável x que está NESTE arquivo não vai 
    interfirir na executação da função.
*/

console.log(somarXmais3()) // 13 