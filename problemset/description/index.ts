import type { TreeNode } from '~/utils/treeNode'

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  if (root.left) {
    invertTree(root.left)
  }
  if (root.right) {
    invertTree(root.right)
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
}
