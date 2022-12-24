const { Observable } = require("rxjs")
const path = require('path')
const fs = require('fs')


function readDirectory(dirPath) {
    return new Observable((subscriber) => {
        try {
            const relativePaths = fs.readdirSync(dirPath)

            // Stream de dados (ao invés de um array de caminhos)!
            relativePaths.forEach((relPath) => {
                const absolutePath = path.join(dirPath, relPath)
                subscriber.next(absolutePath)
            })

            subscriber.complete()
        } catch (err) {
            subscriber.error(err)
        }
    })
}

function createPipeableOperator(sourceSubscribe) {
    return (source) => {
        return new Observable((subscriber) => {
            const sub = sourceSubscribe(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete())
            })
        })
    }
}

function filterFilesByExtension(extension) {
    return createPipeableOperator((subscriber) => ({
        next(file) {
            if (file.endsWith(extension)) {
                subscriber.next(file)
            }
        }
    }))
}

function readFile() {
    return createPipeableOperator((subscriber) => ({
        next(path) {
            try {
                const content = fs.readFileSync(path, {
                    encoding: 'utf-8'
                })
                subscriber.next(content.toString())
            } catch (err) {
                subscriber.error(err)
            }
        }
    }))
}

function dividesData(pattern) {
    return createPipeableOperator((subscriber) => ({
        next(data) {
            data.split(pattern).forEach(el => {
                subscriber.next(el)
            })
        }
    }))
}

function removeWhitespace() {
    return createPipeableOperator((subscriber) => ({
        next(data) {
            if (data.trim()) {
                subscriber.next(data)
            }
        }
    }))
}

function removeIfIncludes(pattern) {
    return createPipeableOperator((subscriber) => ({
        next(data) {
            if (!data.includes(pattern)) {
                subscriber.next(data)
            }
        }
    }))
}

function removeOnlyNumbers() {
    return createPipeableOperator((subscriber) => ({
        next(data) {
            const num = parseInt(data.trim())

            if (num != num) {
                subscriber.next(data)
            }
        }
    }))
}

function removeSymbols(symbols) {
    return createPipeableOperator((subscriber) => ({
        next(data) {
            const textoSemSimbolos = symbols.reduce((acc, symbol) => {
                return acc.split(symbol).join('')
            }, data)
            subscriber.next(textoSemSimbolos)
        }
    }))
}

function groupingWords() {
    return createPipeableOperator((subscriber) => ({
        next(data) {
            subscriber.next(
                Object.values(data.reduce((acc, current) => {
                    const word = current.toLowerCase()
                    const amount = acc[word] ? ++acc[word].amount : 1
                    acc[word] = { word: current, amount }
                    return acc
                }, {}))
            )
        }
    }))
}

module.exports = {
    readDirectory,
    filterFilesByExtension,
    readFile,
    dividesData,
    removeWhitespace,
    removeIfIncludes,
    removeOnlyNumbers,
    removeSymbols,
    groupingWords
}