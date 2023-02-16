export function reverseStr(s: string, k: number): string {
  let i = 0;
  let count = 0;
  let str = '';
  let res = '';
  while (i < s.length) {
    count++;
    if (count <= k) {
      str = s[i] + str;
      if (count === k) {
        res += str;
        str = '';
      }
    } else if (count <= k * 2) {
      res += s[i]
      if (count === k * 2) {
        count = 0;
      }
    }
    i++;
  }
  res += str
  return res
}
