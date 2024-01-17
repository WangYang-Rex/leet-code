class Solution:
  def isIsomorphic(self, s: str, t: str) -> bool:
    ans = 1
    if(len(s) != len(t)):
      return ans != 0
    lenS = len(s)
    arrS = range(lenS)
    for i in arrS[0:lenS-1]:
      for j in arrS[i+1: lenS]:
        if s[i]==s[j]:
          if t[i]!=t[j]:
            ans = 0
            break
        if t[i]==t[j]:
          if s[i]!=s[j]:
            ans = 0
            break
      if ans == 0:
        break
    return ans == 1

s = Solution()
print(s.isIsomorphic('egg','add'))
print(s.isIsomorphic('foo','bar'))
print(s.isIsomorphic('paper','title'))