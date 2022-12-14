/*
    Uma Função Pura é uma função em que o valor de retorno
    é determinado APENAS por seus valores de entrada, sem
    efeitos coláterais observáveis.

    ! Priorize ao máximo utilizar funções puras ! ! ! 

    'Efeito coláteral' é quando você muda algo de fora da função, 
    mas que acaba impactando na mesma ou vice-versa.
*/

// Exemplo 1) Função é impura, mas a chance de ter efeitos coláterais é muito baixa.
function areaCir(raio) {
    return raio * raio * Math.PI
}

// Exemplo 2) Função pura - não depende de nenhum valor externo.
function areaCir(raio, PI) {
    return raio * raio * PI
}

// Exemplo 3) Função impura - pois o retorno não têm como ser determinado com precisão (Funções Puras são mais previsíveis)
function gerarAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

// Exemplo 4) Função impura, existem efeitos coláterais
let count = 0
function sum(a, b) {
    /*
        Efeitos coláterais observáveis!
        A variável 'count' tem o seu valor modificando dentro da função sum(), isso a longo prazo
        pode ocasionar em problemas de manutenção do código, pois fica dificil de saber (sem ler a função)
        onde a variável está sendo modificada. 
    */
    ++count
    return a + b
}

/*
    Além desses exemplos acima, podemos dizer que grande parte das função que servem para ler arquivos
    ou que mexem com banco de dados, por exemplo, também são Funções Impuras.
*/

