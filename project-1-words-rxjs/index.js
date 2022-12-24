const path = require('path')
const fs = require('fs')
const fn = require('./functions.js')
const _ = require('lodash')
const { Observable } = require('rxjs')
const { toArray, map } = require('rxjs/operators')

const directory = path.join(__dirname, '/subtitles')

const symbols = [
    '.', '?', '!', '"', '-', ',', '♪',
    '_', '<i>', '</i>', '\r', '{', '}', '(', ')'
]

const files = fn.readDirectory(directory)
files
    .pipe(
        fn.filterFilesByExtension('.srt'),
        fn.readFile(),
        fn.dividesData('\n'),
        fn.removeWhitespace(),
        fn.removeOnlyNumbers(),
        fn.removeSymbols(symbols),
        fn.dividesData(' '),
        fn.removeWhitespace(),
        fn.removeOnlyNumbers(),
        toArray(),
        fn.groupingWords(),
        map(array => _.sortBy(array, el => -el.amount))

    )
    .subscribe(console.log)

