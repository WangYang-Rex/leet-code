import { describe, expect, it } from 'vitest'
import { numberOfBoomerangs } from '.'

describe('回旋镖的数量', () => {
  testCase(numberOfBoomerangs)
})

function testCase(fn: (points: number[][]) => number) {
  it.each([
    // test cases
    [[[0, 0], [1, 0], [2, 0]], 2],
    [[[1, 1], [2, 2], [3, 3]], 2],
    [[[1, 1]], 0],
  ])('示例%#', (points, expected) => {
    expect(fn(points)).toBe(expected)
  })
}
