
class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
    # 判断长度
    if len(s) != len(t): 
      return False
    
    mapS: dict = {}
    mapT: dict = {}
    for i in range(len(s)):
      if s[i] in mapS:
        mapS[s[i]] = mapS[s[i]] + 1
      else:
        mapS[s[i]] = 1

      if t[i] in mapT:
        mapT[t[i]] = mapT[t[i]] + 1
      else:
        mapT[t[i]] = 1

    if len(mapS) != len(mapT):
      return False
  
    for key in mapS.keys():
      if not (key in mapT) or (mapS[key] != mapT[key]):
        return False
      # if mapS[key] != mapT[key]:
      #   return False
      # if (key in mapT) and (mapS[key] != mapT[key]):
      #   return False
    return True


s = Solution()
# print(s.isAnagram('anagram','nagaram'))
print(s.isAnagram('rat','car'))

# a: dict = {}
# a['a'] = 1
# a['b'] = 2
# a['c'] = 3

# print(a['a'])