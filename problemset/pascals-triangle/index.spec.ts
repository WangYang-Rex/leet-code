import { describe, expect, it } from 'vitest'
import { generate } from '.'

describe('杨辉三角', () => {
  describe('数学', () => {
    testCase(generate)
  })
})

function testCase(fn: (numRows: number) => number[][]) {
  it.each([
    // test cases
    [5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]],
    [1, [[1]]],
  ])('示例%#', (numRows, expected) => {
    expect(fn(numRows)).toStrictEqual(expected)
  })
}
