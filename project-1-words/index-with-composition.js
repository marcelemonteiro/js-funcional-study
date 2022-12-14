const fn = require('./functions')
const path = require('path')

const directory = path.join(__dirname, '/subtitles')

const symbols = [
    '.', '?', '!', '"', '-', ',', '♪',
    '_', '<i>', '</i>', '\r', '{', '}', '(', ')'
]

function composicao(...fns) {
    return (valor) => {
        return fns.reduce(async (acc, fn) => {
            // Verificando se a função é uma Promise:
            if (Promise.resolve(acc) === acc) {
                return fn(await acc)
            }
            return fn(acc)

        }, valor)
    }
}

composicao(
    fn.readDirectory,
    fn.filterFilesByExtension('.srt'),
    fn.readFiles,
    fn.joinData,
    fn.dividesData('\n'),
    fn.removeWhitespace,
    fn.removeIfIncludes('-->'),
    fn.removeIfIncludes('</font>'),
    fn.removeOnlyNumbers,
    fn.removeSymbols(symbols),
    fn.joinData,
    fn.dividesData(' '),
    fn.removeWhitespace,
    fn.removeOnlyNumbers,
    fn.groupingWords,
    fn.sortWords,
    console.log
)(directory)
