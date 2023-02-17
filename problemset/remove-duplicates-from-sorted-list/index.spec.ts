import { describe, expect, it } from 'vitest'
import { deleteDuplicates } from '.';
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('删除排序链表中的重复元素', () => {
  testCase(deleteDuplicates)
})

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    // test cases
    [[1, 1, 2], [1, 2]],
    [[1, 1, 2, 3, 3], [1, 2, 3]],
  ])('示例%#', (head, expected) => {
    expect(fn(createListNode(head))).toEqual(createListNode(expected))
  })
}
