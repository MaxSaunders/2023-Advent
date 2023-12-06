const convertToDigit = str => {
    let strRep = str.toLowerCase()
    strRep = strRep.replaceAll('nine', 'nine9nine')
    strRep = strRep.replaceAll('eight', 'eight8eight')
    strRep = strRep.replaceAll('seven', 'seven7seven')
    strRep = strRep.replaceAll('six', 'six6six')
    strRep = strRep.replaceAll('five', 'five5five')
    strRep = strRep.replaceAll('four', 'four4four')
    strRep = strRep.replaceAll('three', 'three3three')
    strRep = strRep.replaceAll('two', 'two2two')
    strRep = strRep.replaceAll('one', 'one1one')
    return strRep.split('')
}

const isNumber = (n = 0) => n && !isNaN(n)

const getFirstDigit = (strArray = []) => {
    let j = 0
    while (j < strArray.length) {
        const i = strArray[j]
        if (isNumber(i)) {
            return i
        }
        j++
    }

    return 0
}

const testFinal = (data = []) => {
    let sum = 0

    data.forEach(d => {
        const firstDigit = getFirstDigit(convertToDigit(d))
        const lastDigit = getFirstDigit(convertToDigit(d).reverse())
        const combinedNumber = parseInt(firstDigit + lastDigit)
        sum += combinedNumber
    })

    return sum
}

module.exports = {
    convertToDigit,
    isNumber,
    getFirstDigit,
    testFinal,
};