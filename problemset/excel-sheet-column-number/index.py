import math
class Solution:
  def titleToNumber(self, columnTitle: str) -> int:
    res = 0;
    _A = ord('A') - 1
    n = len(columnTitle)
    # print(n)
    for i in range(n):
      c = ord(columnTitle[n - i - 1])
      res = res + (c -_A) * math.pow(26, i)
    return int(res)

# s = Solution()
# print(s.titleToNumber('A'))
# print(s.titleToNumber('AB'))
# print(s.titleToNumber('ZY'))
