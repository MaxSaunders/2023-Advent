const { testFinal } = require('../day-1')
const data3 = require('./data/day_1/data.json')

const data1 = [
    'two1nine',
    'eightwothree',
    'abcone2threexyz',
    'xtwone3four',
    '4nineeightseven2',
    'zoneight234',
    '7pqrstsixteen',
]

const data2 = [
    '1abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e5f',
    'treb7uchet'
]


test('final solution', () => {
    expect(testFinal(data1)).toBe(281)
    expect(testFinal(data2)).toBe(142)
    expect(testFinal(data3)).toBe(54885)
    // console.log('Final Solution: ', testFinal(data3))
})