import { describe, expect, it } from 'vitest'
import { maxHeight } from '.'

describe('堆叠长方体的最大高度', () => {
  testCase(maxHeight)
})

function testCase(fn: (cuboids: number[][]) => number) {
  it.each([
    [[[50, 45, 20], [95, 37, 53], [45, 23, 12]], 190],
    [[[38, 25, 45], [76, 35, 3]], 76],
    [[[7, 11, 17], [7, 17, 11], [11, 7, 17], [11, 17, 7], [17, 7, 11], [17, 11, 7]], 102],
  ])('示例%#', (cuboids, expected) => {
    expect(fn(cuboids)).toBe(expected)
  })
}
