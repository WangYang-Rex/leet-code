import { describe, expect, it } from 'vitest'
import { countBits } from '.'

describe('比特位计数', () => {
  describe('动态规划', () => {
    testCase(countBits)
  })
})

function testCase(fn: (n: number) => number[]) {
  it.each([
    // test cases
    [2, [0, 1, 1]],
    [5, [0, 1, 1, 2, 1, 2]],
  ])('示例%#', (n, expected) => {
    expect(fn(n)).toStrictEqual(expected)
  })
}
