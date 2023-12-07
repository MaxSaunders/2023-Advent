const { main, main2 } = require('../day-4')
const fs = require('fs')

const SAMPLE = './tests/data/day_4/sample.txt'
const DATA = './tests/data/day_4/data.txt'

const readFile = path => fs.readFileSync(path, { encoding: 'utf8' })

test('test sample data part 1', () => {
    expect(main(readFile(SAMPLE))).toBe(13)
})

test('test final data part 1', () => {
    expect(main(readFile(DATA))).toBe(26218)
})

test('test sample data part 2', () => {
    expect(main2(readFile(SAMPLE))).toBe(30)
})

test('test final data part 2', () => {
    expect(main2(readFile(DATA))).toBe(9997537)
})