import { describe, expect, it } from 'vitest'
import { minDifficulty } from '.'

describe('工作计划的最低难度', () => {
  describe('动态规划', () => {
    testCase(minDifficulty)
  })
})

function testCase(fn: (jobDifficulty: number[], d: number) => number) {
  it.each([
    // test cases
    [[6, 5, 4, 3, 2, 1], 2, 7],
    [[9, 9, 9], 4, -1],
    [[1, 1, 1], 3, 3],
    [[7, 1, 7, 1, 7, 1], 3, 15],
  ])('示例%#', (jobDifficulty, d, expected) => {
    expect(fn(jobDifficulty, d)).toBe(expected)
  })
}
