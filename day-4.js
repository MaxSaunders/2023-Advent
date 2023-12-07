const lineToObj = (lineStr = '') => {
    const indexOfColon = lineStr.indexOf(':')
    const gameName = lineStr.substring(0, indexOfColon)
    const [winningNumbers, numbers] = lineStr.substring(indexOfColon + 2)
        .split(' | ')
        .map(e => e.split(' ')
            .filter(i => !!i)
        )

    return {
        game: gameName,
        winningNumbers,
        numbers
    }
}

const main = (file) => {
    const fileLines = file.split('\r\n')
    let score = 0
    fileLines.forEach(line => {
        if (!line) return

        const { winningNumbers, numbers } = lineToObj(line)
        let gameScore = 0

        numbers.forEach(n => {
            if (winningNumbers.includes(n)) {
                if (gameScore > 0) {
                    gameScore *= 2
                } else {
                    gameScore = 1
                }
            }
        })

        score += gameScore
    })

    return score
}

const main2 = (file) => {
    const fileLines = file.split('\r\n').filter(i => !!i)
    const numberOfGames = fileLines.length
    const countKey = { 0: 0 }
    let count = 0

    fileLines.forEach((line, lineIndex) => {
        if (!line) return

        let numOfWinners = 0
        const numOfCards = (countKey[lineIndex] || 0) + 1
        const { winningNumbers, numbers } = lineToObj(line)

        numbers.forEach(n => {
            if (winningNumbers.includes(n)) {
                numOfWinners += 1
            }
        })

        for (let i = 1; i < numOfWinners + 1; i++) {
            if ((lineIndex + i) <= numberOfGames + 1) {
                countKey[lineIndex + i] = (countKey[lineIndex + i] || 0) + (1 * numOfCards)
            }
        }

        count += numOfCards
    })

    return count
}

module.exports = {
    main,
    main2
}