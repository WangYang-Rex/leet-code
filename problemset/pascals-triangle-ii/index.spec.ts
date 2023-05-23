import { describe, expect, it } from 'vitest'
import { getRow } from '.'

describe('杨辉三角 II', () => {
  describe('数学', () => {
    testCase(getRow)
  })
})

function testCase(fn: (rowIndex: number) => number[]) {
  it.each([
    // test cases
    [3, [1, 3, 3, 1]],
    [0, [1]],
    [1, [1, 1]],
  ])('示例%#', (rowIndex, expected) => {
    expect(fn(rowIndex)).toStrictEqual(expected)
  })
}
