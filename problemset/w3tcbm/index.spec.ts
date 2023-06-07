import { describe, expect, it } from 'vitest'
import { countBits } from '.'

describe('前 n 个数字二进制中 1 的个数', () => {
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
