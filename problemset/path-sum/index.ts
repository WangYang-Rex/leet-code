import type { TreeNode } from '~/utils/treeNode'

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  let res = false;
  const _targetSum = targetSum - root.val;
  // 判断是否是叶子节点
  if (!root.left && !root.right && _targetSum === 0) {
    res = true;
  } else {
    if (root.left) {
      res = hasPathSum(root.left, _targetSum);
    }
    if (root.right) {
      res = res || hasPathSum(root.right, _targetSum);
    }
  }

  return res
}
