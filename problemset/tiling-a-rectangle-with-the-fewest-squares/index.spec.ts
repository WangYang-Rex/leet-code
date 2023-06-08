import { describe, expect, it } from 'vitest'
import { tilingRectangle } from '.'

describe('铺瓷砖', () => {
  describe('递归回溯 + 状态压缩', () => {
    testCase(tilingRectangle)
  })
})

function testCase(fn: (n: number, m: number) => number) {
  it.each([
    // test cases
    [2, 3, 3],
    [5, 8, 5],
    [11, 13, 6],
  ])('示例%#', (n, m, expected) => {
    expect(fn(n, m)).toBe(expected)
  })
}
