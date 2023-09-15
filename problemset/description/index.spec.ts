import { describe, expect, it } from 'vitest'
import { invertTree } from '.'
import type { TreeNode } from '~/utils/treeNode'
import { createTreeNode } from '~/utils/treeNode'

describe('翻转二叉树', () => {
  testCase(invertTree)
})

function testCase(fn: (root: TreeNode | null) => TreeNode | null) {
  it.each([
    // test cases
    [[4, 2, 7, 1, 3, 6, 9], [4, 7, 2, 9, 6, 3, 1]],
    [[2, 1, 3], [2, 3, 1]],
    [[], []],
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(createTreeNode(expected))
  })
}
