const fn = require('./functions')
const path = require('path')

const directory = path.join(__dirname, '/subtitles')

const symbols = [
    '.', '?', '!', '"', '-', ',', '♪',
    '_', '<i>', '</i>', '\r', '{', '}', '(', ')'
]


fn.readDirectory(directory)
    .then(fn.filterFilesByExtension('.srt'))
    .then(fn.readFiles)
    .then(fn.joinData)
    .then(fn.dividesData('\n'))
    .then(fn.removeWhitespace)
    .then(fn.removeIfIncludes('-->'))
    .then(fn.removeIfIncludes('</font>'))
    .then(fn.removeOnlyNumbers)
    .then(fn.removeSymbols(symbols))
    .then(fn.joinData)
    .then(fn.dividesData(' '))
    .then(fn.removeWhitespace)
    .then(fn.removeOnlyNumbers)
    .then(fn.groupingWords)
    .then(fn.sortWords)
    .then(console.log)
    .catch(console.log)