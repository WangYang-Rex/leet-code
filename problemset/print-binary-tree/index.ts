import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度遍历优先
 * @desc 时间复杂度 O(Height * 2^(height))  空间复杂度 O(height)
 * @param root
 * @returns
 */
export function printTree(root: TreeNode | null): string[][] {
  const calDepth = (root: TreeNode | null) => {
    let h = 0
    if (root?.left)
      h = Math.max(h, calDepth(root.left) + 1)

    if (root?.right)
      h = Math.max(h, calDepth(root.right) + 1)

    return h
  }

  const dfs = (res: string[][], root: TreeNode, r: number, c: number, height: number) => {
    res[r][c] = root.val.toString()
    if (root.left)
      dfs(res, root.left, r + 1, c - (1 << (height - r - 1)), height)

    if (root.right)
      dfs(res, root.right, r + 1, c + (1 << (height - r - 1)), height)
  }

  const height = calDepth(root)
  const m = height + 1
  const n = (1 << (height + 1)) - 1
  const res = new Array(m).fill(0).map(() => new Array(n).fill(''))
  dfs(res, root!, 0, Math.floor((n - 1) / 2), height)
  return res
}
