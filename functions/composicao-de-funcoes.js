const alunos = [
    { nome: 'Ana', nota: 7.5 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'Jorge', nota: 10 },
    { nome: 'Marcele', nota: 6 },
    { nome: 'Pedro', nota: 9.5 },
    { nome: 'Camile', nota: 5.8 },
]

const getAprovados = (aluno) => aluno.nota >= 7;
const getNomes = (aluno) => aluno.nome;

const aprovados = alunos
    .filter(getAprovados)
    .map(getNomes);

console.log("ALUNOS APROVADOS => ", aprovados);
