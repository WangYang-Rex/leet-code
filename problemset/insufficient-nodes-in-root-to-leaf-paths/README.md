# 根到叶路径上的不足节点

> 难度：中等
>
> https://leetcode.cn/problems/insufficient-nodes-in-root-to-leaf-paths/

## 题目

给你二叉树的根节点 `root` 和一个整数 `limit` ，请你同时删除树中所有 不足节点 ，并返回最终二叉树的根节点。

假如通过节点 `node` 的每种可能的 “根-叶” 路径上值的总和全都小于给定的 `limit`，则该节点被称之为 不足节点 ，需要被删除。

叶子节点，就是没有子节点的节点。

 

### 示例 1：
![https://github.com/WangYang-Rex/leet-code/assets/7553998/471cef97-d7aa-4683-9d2d-92efae520e67](https://github.com/WangYang-Rex/leet-code/assets/7553998/471cef97-d7aa-4683-9d2d-92efae520e67)
```
输入：root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1
输出：[1,2,3,4,null,null,7,8,9,null,14]
```

### 示例 2：

![https://github.com/WangYang-Rex/leet-code/assets/7553998/9bf50d54-efe5-46bc-b7f3-ea05279bf96d](https://github.com/WangYang-Rex/leet-code/assets/7553998/9bf50d54-efe5-46bc-b7f3-ea05279bf96d)
```
输入：root = [5,4,8,11,null,17,4,7,1,null,null,5,3], limit = 22
输出：[5,4,8,11,null,17,4,7,null,null,null,5]
```

### 示例 3：

![https://github.com/WangYang-Rex/leet-code/assets/7553998/864809ed-46dc-4731-bf52-e691c833b14c](https://github.com/WangYang-Rex/leet-code/assets/7553998/864809ed-46dc-4731-bf52-e691c833b14c)
```
输入：root = [1,2,-3,-5,null,4,null], limit = -1
输出：[1,null,-3,4]
```

## 题解

```javascript
function checkSufficientLeaf(node: TreeNode | null, sum: number, limit: number): boolean {
  if (node == null) {
    return false;
  }
  if (node.left == null && node.right == null) {
    return node.val + sum >= limit;
  }
  const haveSufficientLeft = checkSufficientLeaf(node.left, sum + node.val, limit);
  const haveSufficientRight = checkSufficientLeaf(node.right, sum + node.val, limit);
  if (!haveSufficientLeft) {
    node.left = null;
  }
  if (!haveSufficientRight) {
    node.right = null;
  }
  return haveSufficientLeft || haveSufficientRight;
}

export function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
  const haveSufficient = checkSufficientLeaf(root, 0, limit);
  return haveSufficient ? root : null;
}

```
