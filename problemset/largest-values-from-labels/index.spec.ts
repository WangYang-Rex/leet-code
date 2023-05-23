import { describe, expect, it } from 'vitest'
import { largestValsFromLabels } from '.'

describe('受标签影响的最大值', () => {
  describe('aa', () => {
    testCase(largestValsFromLabels)
  })
})

function testCase(fn: (values: number[], labels: number[], numWanted: number, useLimit: number) => number) {
  it.each([
    // test cases
    [[5, 4, 3, 2, 1], [1, 1, 2, 2, 3], 3, 1, 9],
    [[5, 4, 3, 2, 1], [1, 3, 3, 3, 2], 3, 2, 12],
    [[9, 8, 8, 7, 6], [0, 0, 0, 1, 1], 3, 1, 16],
  ])('示例%#', (values, labels, numWanted, useLimit, expected) => {
    expect(fn(values, labels, numWanted, useLimit)).toBe(expected)
  })
}
