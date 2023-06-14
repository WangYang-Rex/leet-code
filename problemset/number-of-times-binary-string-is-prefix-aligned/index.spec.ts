import { describe, expect, it } from 'vitest'
import { numTimesAllBlue } from '.';

describe('二进制字符串前缀一致的次数', () => {
  describe('动态规划', () => {
    testCase(numTimesAllBlue)
  })
})

function testCase(fn: (flips: number[]) => number) {
  it.each([
    // test cases
    [[3, 2, 4, 1, 5], 2],
    [[4, 1, 2, 3], 1],
  ])('示例%#', (flips, expected) => {
    expect(fn(flips)).toBe(expected)
  })
}
