import { describe, expect, it } from 'vitest'
import { sufficientSubset } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('根到叶路径上的不足节点', () => {
  describe('示例1', () => {
    testCase(sufficientSubset)
  })
})

function testCase(fn: (root: TreeNode | null, limit: number) => TreeNode | null) {
  it.each([
    // test cases
    [[1, 2, 3, 4, -99, -99, 7, 8, 9, -99, -99, 12, 13, -99, 14], 1, [1, 2, 3, 4, null, null, 7, 8, 9, null, 14]],
    [[5, 4, 8, 11, null, 17, 4, 7, 1, null, null, 5, 3], 22, [5, 4, 8, 11, null, 17, 4, 7, null, null, null, 5]],
    [[1, 2, -3, -5, null, 4, null], -1, [1, null, -3, 4]],
  ])('示例%#', (root, limit, expected) => {
    expect(fn(createTreeNode(root), limit)).toStrictEqual(createTreeNode(expected))
  })
}
