import { describe, expect, it } from 'vitest'
import { Solution } from '.'
import { createListNode } from '~/utils/listNode';

describe('链表随机节点', () => {
  testCase(Solution);
})

function testCase(_Solution: any) {
  it.each([
    // test cases
    ['Solution', _Solution],
  ])('示例%#', (text, __Solution) => {
    const solution = new __Solution(createListNode([1, 2, 3]))
    expect([1, 2, 3].includes(solution.getRandom())).toBe(true)
    expect([1, 2, 3].includes(solution.getRandom())).toBe(true)
    expect([1, 2, 3].includes(solution.getRandom())).toBe(true)
    expect([1, 2, 3].includes(solution.getRandom())).toBe(true)
    expect([1, 2, 3].includes(solution.getRandom())).toBe(true)
    expect([1, 2, 3].includes(solution.getRandom())).toBe(true)
    expect([1, 2, 3].includes(solution.getRandom())).toBe(true)
  })
}
