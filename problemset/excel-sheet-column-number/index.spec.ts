import { describe, expect, it } from 'vitest'
import { titleToNumber } from '.'
describe('Excel 表列序号', () => {
  describe('first', () => {
    testCase(titleToNumber)
  })
})

function testCase(fn: (columnTitle: string) => number) {
  it.each([
    // test cases
    ['A', 1],
    ['AB', 28],
    ['ZY', 701],
  ])('示例%#', (columnTitle, expected) => {
    expect(fn(columnTitle)).toBe(expected)
  })
}
