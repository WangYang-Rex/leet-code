import { describe, expect, it } from 'vitest'
import { convertToTitle } from '.'

describe('Excel表列名称', () => {
  describe('typescript', () => {
    testCase(convertToTitle)
  })
})

function testCase(fn: (columnNumber: number) => string) {
  it.each([
    // test cases
    [1, 'A'],
    [28, 'AB'],
    [701, 'ZY'],
    [2147483647, 'FXSHRXW'],
  ])('示例%#', (columnNumber, expected) => {
    expect(fn(columnNumber)).toBe(expected)
  })
}
