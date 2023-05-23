import { describe, expect, it } from 'vitest'
import { preorderTraversal } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('二叉树的前序遍历', () => {
  describe('递归', () => {
    testCase(preorderTraversal)
  })
})

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    // test cases
    [[1, null, 2, 3], [1, 2, 3]],
    [[], []],
    [[1], [1]],
    [[1, 2], [1, 2]],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected)
  })
}
