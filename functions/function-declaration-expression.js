/* 
    A diferença está no nome da função (1) e como estarão disponíveis no contexto da aplicação (2).
*/

/* 
    (1) - Na função declaradas por Function Expression eu não nomeio a função (ou seja, crio uma função
    anônima), pois ela será acessada pelo nome da variavel/constante em que eu atribuí a função.
*/

// Function declaration 
function soma1(a, b) {
    return a + b;
}

// Function expression
let soma2 = function (a, b) {
    return a + b;
}

// O 'function' não é obrigatório! Arrow function!!
soma2 = (a, b) => {
    return a + b;
}

// Também pode ser de forma mais enxuta, aqui o return estará implícito
soma2 = (a, b) => a + b;


/* 
    (2) - Uma função declarada por Function Expression não vai estar acessível em
    linhas de código anteriores à linha de execução atual. Só está disponivel em run-time, 
    no momento em que a linha for corrida pelo código.
    
    Enquando que uma função declarada por Function Declaration está sempre disponível, 
    chama-se a isto Hoisting, disponivel em parse-time, mesmo nas linhas anteriores.
*/

//console.log(ola()) // vai dar erro! (Cannot access 'ola' before initialization)
const ola = () => console.log('ola');

console.log(ola2());
function ola2() {
    console.log('olá'); // vai funcionar normalmente, por causa do hoisting
}
