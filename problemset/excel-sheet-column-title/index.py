class Solution:
  def convertToTitle(self, columnNumber: int) -> str:
    ans = '';
    A = ord('A') - 1
    while(columnNumber > 0) :
      B = int(columnNumber/26);
      C = columnNumber % 26
      if(C == 0): 
        C = 26;
        B = B -1
      ans = chr(A + C) + ans;
      columnNumber = B
    print(ans)
    return ans;

s = Solution();
s.convertToTitle(1);
s.convertToTitle(26);
s.convertToTitle(27);
s.convertToTitle(701);
