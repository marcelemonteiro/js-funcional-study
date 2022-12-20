/*
    Observer é um padrão de projeto comportamental, no qual você têm um 
    objeto (subject) que é observado por outros objetos vinculados a ele (observers) 
    e quando o mesmo sofre alguma alteração de estado esses objetos são 
    notificados.

    Os subjects são os objetos responsáveis por detectar um evento, enquanto os 
    observers são os objetos interessados na detecção do evento e que ficam esperando
    uma notificação dos subjects.

    Para que um observer seja notificado é necessário que o mesmo se registre no
    subject.

    ** RELEMBRANDO: Design Patterns ou padrões de projetos são soluções generalistas
    para problemas recorrentes durante o desenvolvimento de um software. **
*/

/*
    Histórinha para contextualizar...
    Problema: A namorada quer fazer uma festa surpresa para o seu namorado, mas para isso ela 
    precisa saber quando ele estará chegando em casa. 

    Utilizando o padrão Observer podemos criar a seguinte solução:
    A namorada pede para o porteiro avisá-la quando avistar o seu namorado. O porteiro vê o 
    namorado e avisa para a namorada. A namorada se prepara (apaga as luzes) para receber o 
    namorado com a surpresa.

    Nessa história podemos identicar os elementos:
    Subject -> Porteiro
    Observer -> Namorada 

    O observer (namorada) se registra no subject (porteiro). O subject detecta um evento (chegada
    do namorado) e notifica o observer registrado. Quando o observer é notificado ele realiza uma
    ação (namorada apaga as luzes e espera o namorado).
*/

/*
    Exemplo em código da história:
*/

const readline = require('readline')

function receberResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve, reject) => {
        try {
            rl.question(pergunta, (response) => {
                resolve(response)
                rl.close()
            })
        } catch (err) {
            reject(err)
        }
    })
}

function namorada() {
    console.log('Apaga as luzes...')
    console.log('SUPREESAAA!!')
}

async function porteiro(interessados) {
    while (true) {
        const response = await receberResposta('O namorado chegou? s/n/q ')

        if (response.toLowerCase() === 's') {
            // Os observers são notificados
            if (Array.isArray(interessados)) {
                (interessados || []).forEach(observer => observer())
            } else {
                interessados()
            }
        } else if (response.toLowerCase() === 'q') {
            break
        }
    }
}

porteiro(namorada)

