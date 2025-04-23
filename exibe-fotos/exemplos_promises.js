const somaDemorada = (n) => {
    const p = new Promise((resolve, reject) => {
        if (n >= 1) {
            let ac = 0
            for (let i = 1; i <= n; i++)
                ac += i
            resolve(ac)
        }
        else
            reject('Somente valores positivos')
    })
    return p

}

const res = somaDemorada(-10)


res
    .then((soma) => console.log(`Soma: ${soma}`))
    .catch((err) => console.log(`Erro: ${err}`))

console.log('Outras coisas ...')