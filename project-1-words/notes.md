# Projeto 1: Palavras mais usadas

# Project #1: Most used words

## Objetivo

Ler os arquivos de legenda e retornar um objeto com as palavras e a quantidade em que elas foram utilizadas.
Exemplo:

```
{
    "you": 120,
    "I": 80,
    ...
}
```

## Algoritmo (passo a passo)

- [x] Ler os arquivos de legenda do diretório;
- [x] Filtrar os arquivos do diretório para pegar só as legendas;
- [x] Ler o conteúdo dos arquivos;
- [x] Juntar todo o conteúdo dos arquivos em uma única string;
- [x] Separar os conteúdos dos arquivos em linhas (array de linhas);
- [x] Remover todas as linhas vazias;
- [x] Remover linhas com tempo;
- [x] Remover linhas apenas com número;
- [x] Remover símbolos e tags;
- [x] Separar linhas em palavras;
- [x] Agrupar palavras e a quantidade em que elas aparecerem;
- [x] Ordenar palavras em ordem decrescente de quantidade;

## O que aprendi/pratiquei com esse projeto

- Promises e funções assíncronas;
- Diferenças entre funções síncronas e assíncronas;
- Módulos File system e Path do Node.js;
- Lógica de programação em JavaScript;
- Métodos de Array: filter, map e reduce;
- Objetos em JavaScript;
- Sempre que achar um problema complexo, tente fazer uma versão mais simples desse mesmo problema para entendê-lo...

## Dificuldades

- Não consegui achar um jeito que remover os comentário no final que não fazem parte da legenda;
