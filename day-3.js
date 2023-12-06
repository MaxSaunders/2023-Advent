const isNumber = (n = '0') => n && !isNaN(n)

const circleNumbers = (startIndex, endIndex, lineIndex, fileArray, number) => {
    for (let a = lineIndex - 1; a <= lineIndex + 1; a++) {
        for (let b = startIndex - 1; b <= endIndex + 1; b++) {
            if (a < 0 || b < 0 || a >= fileArray.length || b >= fileArray[a].length) {
                continue
            }

            const testChar = fileArray[a][b]
            if (testChar && (testChar != '.') && isNaN(testChar)) {
                return number
            }
        }
    }

    return 0
}

const main = (file) => {
    const fileLines = file.split('\r\n')

    let sum = 0

    fileLines.forEach((line, lineIndex) => {
        const lineArr = line.split('')

        let i = 0
        while (i < lineArr.length) {
            let numberStr = ''
            let lengthOfNum = 0
            let startIndex = i
            let endIndex = i

            if (isNumber(lineArr[i])) {
                while (isNumber(lineArr[i]) && i < lineArr.length) {
                    numberStr += lineArr[i]
                    endIndex = i
                    i++
                }

                const number = parseInt(numberStr)
                sum += circleNumbers(startIndex, endIndex, lineIndex, fileLines, number)
            }

            i += Math.max(lengthOfNum, 1)
        }
    });

    return sum
}

const checkCircle = (lineIndex, charIndex, grid) => {
    const positionsToCheck = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    let adjGears = []

    positionsToCheck.forEach(array => {
        const a = lineIndex + array[0]
        const b = charIndex + array[1]

        if (a < 0 || b < 0 || a >= grid.length || b >= grid[a].length) {
            return
        }

        const charToCheck = grid[a][b]
        if (charToCheck == '*') {
            adjGears.push([a, b])
        }
    })

    return adjGears
}

const main2 = (file) => {
    const fileLines = file.split('\r\n')

    let sum = 0
    let numMap = []

    fileLines.forEach((line, lineIndex) => {
        const lineArr = line.split('')
        let currentNumber = ''
        let adjGears = []

        let i = 0
        while (i < lineArr.length) {
            let lengthOfNum = 0

            if (isNumber(lineArr[i])) {
                while (isNumber(lineArr[i]) && i < lineArr.length) {
                    currentNumber += lineArr[i]
                    const newGears = checkCircle(lineIndex, i, fileLines)
                    if (newGears.length) {
                        adjGears.push(...newGears)
                    }
                    i++
                }
                // once we have found the full number
                if (adjGears.length) {
                    numMap.push({ [currentNumber]: adjGears })
                }
                adjGears = []
                currentNumber = ''
            }

            i += Math.max(lengthOfNum, 1)
        }
    })

    let gearMap = {}
    numMap.forEach(entry => {
        const [key, values] = Object.entries(entry)[0]
        const number = key

        values.forEach(v => {
            if (v in gearMap) {
                if (!gearMap[v].includes(number)) {
                    gearMap[v] = [...gearMap[v], number]
                }
            } else {
                gearMap[v] = [number]
            }
        })
    })

    Object.values(gearMap).forEach(numberArray => {
        if (numberArray.length == 2) {
            sum += (numberArray[0] * numberArray[1])
        }
    })

    return sum
}

module.exports = {
    main,
    main2
}