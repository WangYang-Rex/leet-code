import { describe, expect, it } from 'vitest'
import { isGoodArray } from './index'

describe('检查「好数组」', () => {
  describe('数论', () => {
    testCase(isGoodArray)
  })
})

function testCase(fn: (nums: number[]) => boolean) {
  it.each([
    [[12, 5, 7, 23], true],
    [[29, 6, 10], true],
  ])('示例%#', (nums, expected) => {
    expect(fn(nums)).toBe(expected)
  })
}
