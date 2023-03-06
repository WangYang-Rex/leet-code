import { describe, expect, it } from 'vitest'
import { minimumDeletions, minimumDeletions1 } from '.'

describe('使字符串平衡的最少删除次数', () => {
  describe('双指针 + 剪枝', () => {
    testCase(minimumDeletions)
  })
  describe('枚举', () => {
    testCase(minimumDeletions1)
  })
})

function testCase(fn: (s: string) => number) {
  it.each([
    // test cases
    ['aababbab', 2],
    ['bbaaaaabb', 2],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
