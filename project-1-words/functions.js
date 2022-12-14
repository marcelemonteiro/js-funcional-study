const fs = require('fs')
const path = require('path')

function readDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        try {
            const relativePaths = fs.readdirSync(dirPath)
            const absolutePaths = relativePaths.map(file => path.join(dirPath, file))
            resolve(resolve(absolutePaths))
        } catch (err) {
            reject(err)
        }
    })
}

function filterFilesByExtension(extension) {
    return (files) => {
        return files.filter(file => file.endsWith(extension))
    }
}

function readFile(path) {
    return new Promise((resolve, reject) => {
        try {
            // readFileSync(path, options) we can read files in a synchronous way
            const content = fs.readFileSync(path, { encoding: 'utf-8' })
            resolve(content.toString())
        } catch (err) {
            reject(err)
        }
    })
    /*
        Using readFile(filename, encoding, callback_function):

        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })

    */

}

function readFiles(paths) {
    /*
        The Promise.all() method takes an itarable of promises as input
        and return a single Promise. This returned promise fulfills when 
        all of the input's promises fulfill (including when an empty 
        iterable is passed), with an array of the fulfillment values. 
        It rejects when any of the input's promises rejects, with this 
        first rejection reason.
    */
    return Promise.all(paths.map(readFile))
}


function joinData(data) {
    return data.join(' ')
}

function dividesData(pattern) {
    return (data) => data.split(pattern)
}

function removeWhitespace(data) {
    return data.filter(el => el.trim())
}


function removeIfIncludes(pattern) {
    /*
        Returning a function I can do this:

        .then(fn.removeIfIncludes('-->))

        instead of:

        .then(lines => fn.removeIfInclues('-->')(linhas))

        or having to add a new parameter:

        .then(lines => fn.removeIfInclues('-->', linhas))
    */

    return (array) => {
        return array.filter(el => !el.includes(pattern))
    }
}

function removeOnlyNumbers(array) {
    return array.filter(el => {
        /*
            el = 'abc' -> parseInt() returns NaN
            so... el != el (true)

            but if el = '1' -> parseInt() returns 1
            so... el == el, el != el (false)
        */

        const num = parseInt(el.trim())
        return num != num

        // TODO:
        /* 
            Using RegEx:
        */
    })
}

function removeSymbols(symbols) {
    return (array) => {
        return array.map(el => {
            return symbols.reduce((acc, symbol) => {
                return acc.split(symbol).join('')
            }, el)
        })


        /*
            Version with a mutable variable (avoid):

            return array.map((el) => {
                let newText = el
                symbols.forEach(symbol => {
                    newText = newText.split(symbol).join('')
                })
                return newText
            })
        */


    }
}

/*
    ! ATENTION: AVOID AS MUCH AS POSSIBLE ITERATE OVER A VERY LARGE ARRAY
    SEVERAL TIMES !

    I do this in those functions (I use filter, map and reduce)
    and the code becomes very slowly:

    function mostUsedWords(array) {
        const wordsNotRepeated = removeRepeated(array)

        return wordsNotRepeated.map(word => {
            return {
                word,
                amount: countWords(word, array)
            }
        })
    }

    function removeRepeated(array) {
        return array
            .filter((el, index) => array.indexOf(el) == index)
    }

    function countWords(letter, array) {
        return array.reduce((acc, current) => {
            return current === letter ? ++acc : acc
        }, 0)
    }
*/

// Grouping and counting the words in the most effective way (iterate one time only):
function groupingWords(words) {
    /*
        I need to use Object.value() because it returns an array of objets, 
        so I can sort by amounts.

        Object.values() -> returns [{word, amount}, {word, amount}, ...]

        without Object.values() -> returns {word: {word, amount}, word: {word, amount}, ...}
    */
    return Object.values(words.reduce((acc, current) => {
        const word = current.toLowerCase()
        const amount = acc[word] ? ++acc[word].amount : 1
        acc[word] = { word: current, amount }
        return acc
    }, {}))
}


function sortWords(words) {
    // Sem Imutabilidade!! Pode gerar efeitos coláterais!
    // return words.sort((a, b) => b.amount - a.amount)

    return [...words].sort((a, b) => b.amount - a.amount)

    /*
        Descendant sort:
        
        If the subtraction is positive, b changes position:
        3 - 1 = 2
        [1, 3, 1, 5]

        3 - 1 = 2
        [1, 1, 3, 5]

        3 - 5 = -2 (negative value -> doesn't change position)
        [1, 1, 3, 5]
    
    */
}


module.exports = {
    readDirectory,
    filterFilesByExtension,
    readFiles,
    joinData,
    removeWhitespace,
    dividesData,
    removeIfIncludes,
    removeOnlyNumbers,
    removeSymbols,
    groupingWords,
    sortWords
}