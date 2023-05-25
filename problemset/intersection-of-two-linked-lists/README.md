# 相交链表

> 难度：简单
>
> https://leetcode.cn/problems/intersection-of-two-linked-lists/

## 题目

给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null` 。

图示两个链表在节点 `c1` 开始相交：

![0](https://github.com/WangYang-Rex/leet-code/assets/7553998/cc96fabb-2354-4c99-90a9-e0d4c889a179)

题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。

自定义评测：

评测系统 的输入如下（你设计的程序 不适用 此输入）：

- `intersectVal` - 相交的起始节点的值。如果不存在相交节点，这一值为 `0`
- `listA` - 第一个链表
- `listB` - 第二个链表
- `skipA` - 在 `listA` 中（从头节点开始）跳到交叉节点的节点数
- `skipB` - 在 `listB` 中（从头节点开始）跳到交叉节点的节点数
评测系统将根据这些输入创建链式数据结构，并将两个头节点 headA 和 headB 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 视作正确答案 。

 

### 示例 1：

![1](https://github.com/WangYang-Rex/leet-code/assets/7553998/bf442be6-cd91-4029-b0c8-0244ca8d0207)

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。
```

### 示例 2：

![2](https://github.com/WangYang-Rex/leet-code/assets/7553998/112d7064-8815-4f78-935d-ccd58ce9007f)

```
输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at '2'
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

### 示例 3：


![3](https://github.com/WangYang-Rex/leet-code/assets/7553998/9db1b22d-1019-4533-adea-2430d14fa155)

```
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
```

## 题解


### 哈希表
```javascript
/**
 * 哈希表
 * @desc 时间复杂度 O(M + N)  空间复杂度 O(M)
 * @param headA
 * @param headB
 */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  if (!headA || !headB) return null

  const visited = new WeakSet<ListNode>()

  let cur: ListNode | null = headA

  while (cur) {
    visited.add(cur)
    cur = cur.next
  }

  cur = headB
  while (cur) {
    if (visited.has(cur))
      return cur

    cur = cur.next
  }

  return null
}
```

### 双指针

```javascript

/**
 * 双指针
 * @desc 时间复杂度 O(M + N)  空间复杂度 O(1)
 * @param headA
 * @param headB
 * @returns
 */
export function getIntersectionNode2(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  if (!headA || !headB) return null
  let pointA: ListNode | null = headA
  let pointB: ListNode | null = headB

  while (pointA || pointB) {
    if (pointA === pointB) return pointA

    pointA = pointA ? pointA.next : headB
    pointB = pointB ? pointB.next : headA
  }

  return null
}
```

