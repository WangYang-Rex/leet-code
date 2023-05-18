import { describe, expect, it } from 'vitest'
import { addNegabinary } from '.'

describe('负二进制数相加', () => {
  describe('模拟', () => {
    testCase(addNegabinary)
  })
})

function testCase(fn: (arr1: number[], arr2: number[]) => number[]) {
  it.each([
    // test cases
    [[1, 1, 1, 1, 1], [1, 0, 1], [1, 0, 0, 0, 0]],
    [[0], [0], [0]],
    [[0], [1], [1]],
  ])('示例%#', (arr1, arr2, expected) => {
    expect(fn(arr1, arr2)).toStrictEqual(expected)
  })
}
