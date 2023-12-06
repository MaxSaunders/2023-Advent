const { part1, part2 } = require('../day-2')
const data = require('./data/day_2/data.json')
const data2 = require('./data/day_2/sample.json')

test('Test Sample Input Day 1', () => {
    expect(part1(data2)).toBe(8)
})

test('Test Final Input Day 1', () => {
    // console.log({ solution_ttt: part1(data) })
    expect(part1(data)).toBe(1853)
})

test('Test Sample Input Day 2', () => {
    expect(part2(data2)).toBe(2286)
})

test('Test Final Input Day 2', () => {
    // console.log({ solution_xxx: part2(data_part2) })
    expect(part2(data)).toBe(72706)
})