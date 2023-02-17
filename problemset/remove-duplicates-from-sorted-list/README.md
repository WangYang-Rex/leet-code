# 删除排序链表中的重复元素

> 难度：简单
>
> https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

## 题目

给定一个已排序的链表的头 `head` ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 

示例 1：
![list1](https://user-images.githubusercontent.com/7553998/219607974-c2c8b36b-46e3-4b0e-aa53-16261bcbe79c.jpeg)

```
输入：head = [1,1,2]
输出：[1,2]
```
示例 2：

![list2](https://user-images.githubusercontent.com/7553998/219608149-1cfdb713-3567-45cc-aa18-312774a7a579.jpeg)

```
输入：head = [1,1,2,3,3]
输出：[1,2,3]
```
## 解题

```typescript
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  const res = head;
  while (head && head.next) {
    const next = head.next;
    if (head.val === next.val) {
      head.next = next.next;
    } else {
      head = next;
    }
  }
  return res
}

```