import type { TreeNode } from '~/utils/treeNode'
export function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  const fn = (node: TreeNode | null) => {
    if (!node) return
    fn(node.left);
    fn(node.right);
    res.push(node.val);
  }
  fn(root);
  return res;
}
