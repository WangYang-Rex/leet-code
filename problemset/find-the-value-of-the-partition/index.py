# 从utilsPython/array.py导入quick_sort
# from utilsPython.array import quick_sort
from typing import List

def quick_sort(arr: List[int]) -> List[int]:
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

class Solution:
  def findValueOfPartition(self, nums: List[int]) -> int:
    sortedNums = quick_sort(nums)
    n = len(sortedNums)
    res = -1
    for i in range(0, n-1):
      x = sortedNums[i + 1] - sortedNums[i]
      if res == -1 or x < res:
        res = x
    return res

s = Solution()
print(s.findValueOfPartition([1,3,2,4])) # 1
print(s.findValueOfPartition([100,1,10])) # 9