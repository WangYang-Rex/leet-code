import { describe, expect, it } from 'vitest'
import { pathSum } from '.'
import type { TreeNode } from '~/utils/treeNode';
import { createTreeNode } from '~/utils/treeNode';

describe('路径总和 III', () => {
  testCase(pathSum);
})

function testCase(fn: (root: TreeNode | null, targetSum: number) => number) {
  it.each([
    // test cases
    [[10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8, 3],
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22, 3],
  ])('示例%#', (nums, target, expected) => {
    expect(fn(createTreeNode(nums), target)).toBe(expected)
  })
}
