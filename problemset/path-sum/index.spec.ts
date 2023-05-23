import { describe, expect, it } from 'vitest'
import { hasPathSum } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('路径总和', () => {
  describe('二叉树', () => {
    testCase(hasPathSum)
  })
})

function testCase(fn: (root: TreeNode | null, targetSum: number) => boolean) {
  it.each([
    // test cases
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22, true],
    [[1, 2, 3], 5, false],
    [[1, 2], 0, false],
  ])('示例%#', (root, targetSum, expected) => {
    expect(fn(createTreeNode(root), targetSum)).toBe(expected)
  })
}
