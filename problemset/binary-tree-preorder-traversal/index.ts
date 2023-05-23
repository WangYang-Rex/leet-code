import type { TreeNode } from '~/utils/treeNode'
export function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  const fn = (node: TreeNode | null) => {
    if (!node) return
    res.push(node.val);
    fn(node.left);
    fn(node.right);
  }
  fn(root);
  return res;
}
