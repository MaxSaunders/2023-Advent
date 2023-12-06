const getNumber = (str = '', color = '') => {
    let num = 0
    const strArray = str.trim().split(' ')
    strArray.forEach((entry, index) => {
        if (entry.includes(color)) {
            num = strArray[index - 1]
        }
    })

    return parseInt(num)
}

const convertToObj = (str = '') => {
    const RED_LIMIT = 12
    const GREEN_LIMIT = 13
    const BLUE_LIMIT = 14

    const indexOfColon = str.indexOf(':')

    let number = ''

    let j = indexOfColon - 1
    while (j >= 0 && str.charAt(j) && !isNaN(str.charAt(j)) && str.charAt(j) !== ' ') {
        number = str.charAt(j) + number
        j--
    }

    const gameNumber = parseInt(number)

    const gamesInfo = str.substring(indexOfColon + 2).split('; ')

    let red = 0
    let blue = 0
    let green = 0
    let possible = true

    let min_red = 0
    let min_blue = 0
    let min_green = 0

    gamesInfo.forEach(round => {
        let red_temp = getNumber(round, 'red')
        let blue_temp = getNumber(round, 'blue')
        let green_temp = getNumber(round, 'green')

        if (red_temp > RED_LIMIT || blue_temp > BLUE_LIMIT || green_temp > GREEN_LIMIT) {
            possible = false
        }

        min_red = Math.max(min_red, red_temp)
        min_blue = Math.max(min_blue, blue_temp)
        min_green = Math.max(min_green, green_temp)

        red += red_temp
        blue += blue_temp
        green += green_temp
    })

    return {
        game: gameNumber,
        possible,
        red,
        green,
        blue,
        min_red,
        min_blue,
        min_green,
    }
}

const part1 = (gameArray = []) => {
    let sum = 0

    gameArray.forEach(gameString => {
        const { game, possible } = convertToObj(gameString)
        if (possible) {
            sum += game
        }
    })

    return sum
}

const part2 = (gameArray = []) => {
    let sum = 0

    gameArray.forEach(gameString => {
        const { min_red, min_blue, min_green } = convertToObj(gameString)

        let red_temp = Math.max(min_red, 1)
        let blue_temp = Math.max(min_blue, 1)
        let green_temp = Math.max(min_green, 1)

        const roundSum = (red_temp * blue_temp * green_temp)
        sum += roundSum
    })

    return sum
}

module.exports = {
    part1,
    part2,
}