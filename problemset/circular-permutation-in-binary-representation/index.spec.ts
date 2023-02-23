import { describe, expect, it } from 'vitest'
import { circularPermutation } from '.'

describe('循环码排列', () => {
  describe('位运算', () => {
    testCase(circularPermutation)
  })
})

function testCase(fn: (n: number, start: number) => number[]) {
  it.each([
    // test cases
    [2, 3, [3, 2, 0, 1]],
    [3, 2, [2, 3, 1, 0, 4, 5, 7, 6]],
  ])('示例%#', (n, start, expected) => {
    expect(fn(n, start)).toStrictEqual(expected)
  })
}
