function main() {
    fn1();
}

function fn1() {
    fn2();
}

function fn2() {
    fn3();
}

function fn3() {
    setTimeout(() => {
        fn4()
    }, 3000)

    console.log('fn3')
}

function fn4() {
    fn5()
}

function fn5() {
    console.log('timeout')
}

main()
console.log('fim')