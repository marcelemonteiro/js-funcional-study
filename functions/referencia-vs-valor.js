let a = { nome: 'JavaScript', idade: 26 };
// DESSA FORMA B ESTARÁ ARMAZENADO A REFERÊNCIA DE A
//  E, COM ISSO, OCUPANDO O MESMO ESPAÇO DE MEMÓRIA
let b = a;

// ENTÃO SE EU FIZER ISSO:
b.nome = "PHP";

// VAI ALTERAR O VALOR DE A
console.log(a.nome); // PHP