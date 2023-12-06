const { main, main2 } = require('../day-3')
const fs = require('fs')

const SAMPLE = './tests/data/day_3/sample.txt'
const DATA = './tests/data/day_3/data.txt'

const readFile = path => fs.readFileSync(path, { encoding: 'utf8' })

test('test sample data part 1', () => {
    expect(main(readFile(SAMPLE))).toBe(4361)
})

test('test final data part 1', () => {
    // console.log({ finalSolution: main(readFile(DATA)) })
    expect(main(readFile(DATA))).toBe(553825)
})

test('test sample data part 2', () => {
    expect(main2(readFile(SAMPLE))).toBe(467835)
})

test('test final data part 2', () => {
    // console.log({ finalPart2: main2(readFile(DATA)) })
    expect(main2(readFile(DATA))).toBe(93994191)
})