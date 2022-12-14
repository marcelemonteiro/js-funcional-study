function esperarPor(tempo) {
    const futuro = Date.now() + tempo
    while (Date.now() < futuro) { }
}

setTimeout(() => console.log('Exec #1'), 3000)
setTimeout(() => {
    esperarPor(3000)
    console.log('Exec #2')
}, 300) // tem maior prioridade mesmo sendo registrado depois

esperarPor(5000) // tudo só será executado depois desses 5 segundos
console.log('Fim')