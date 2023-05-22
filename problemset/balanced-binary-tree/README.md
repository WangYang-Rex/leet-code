# 平衡二叉树

> 难度：简单
>
> https://leetcode-cn.com/problems/balanced-binary-tree/

## 题目

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

> 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

### 示例

#### 示例 1：

![balanced-binary-tree-1](https://user-images.githubusercontent.com/54696834/159102026-8edc8fdc-cfcd-440d-992d-a432c625b78f.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：true
```

#### 示例 2：

![balanced-binary-tree-2](https://user-images.githubusercontent.com/54696834/159102024-0a60d103-9f65-4bb0-afbc-2f1f77843cf6.jpg)

```
输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
```

#### 示例 3：

```
输入：root = []
输出：true
```

## 解法

```typescript
/**
 * 自顶向下的递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */

export function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  const getNodeObj = (node: TreeNode | null): any => {
    const nodeObj = {
      height: 0,
      isBalanced: true,
    };
    if (!node) {
      return nodeObj;
    }
    const leftNodeObj = getNodeObj(node.left);
    const rightNodeObj = getNodeObj(node.right);
    if (leftNodeObj.isBalanced && rightNodeObj.isBalanced) {
      nodeObj.height = Math.max(leftNodeObj.height, rightNodeObj.height) + 1;
      nodeObj.isBalanced = Math.abs(leftNodeObj.height - rightNodeObj.height) <= 1;
    } else {
      nodeObj.isBalanced = false;
    }
    return nodeObj;
  }

  const nodeObj = getNodeObj(root);
  return nodeObj.isBalanced;
}

```
