const map: Record<string, number> = {};
export function minimumDeletions(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  if (map[s] >= 0) {
    return map[s];
  }
  let res = 0;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === 'b' && s[right] === 'a') {
      const _sl = s.slice(0, left) + s.slice(left + 1);
      const _sr = s.slice(0, right) + s.slice(right + 1);
      const res_l = minimumDeletions(_sl);
      const res_r = minimumDeletions(_sr);
      res = Math.min(res_l, res_r) + 1;
      left = right;
    } else {
      if (s[left] === 'a') {
        left++
      }
      if (s[right] === 'b') {
        right--;
      }
    }
  }
  map[s] = res;
  return res;
}
/** 枚举 */
export function minimumDeletions1(s: string): number {
  let leftb = 0; let righta = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      righta++;
    }
  }
  let res = righta;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === 'a') {
      righta--;
    } else {
      leftb++;
    }
    res = Math.min(res, leftb + righta);
  }
  return res;
}
// minimumDeletions('aababbab');
// minimumDeletions('bbaaaaabb');
// console.log(minimumDeletions('babbabaaaaaababbbaabbbabaaaaababaaaabbbbaaababbaabbbbababbbbaaaaaaabbabaaabaabbabbbbabbbababaabbbbaabbbaaaabbbababbabbbbbabbbabbbbbabaabbabbbbbabbabaaaaababbbabbbaabababababaabaababbbabbaaabbbbabbabbbababbbbaaabbbababbbbbbaaabbbbabaaaaaabaababbbaaaabaabaaabbaaabbbbbbabaabaabbaaaabbabbbaaabbaabbaaaabbaaaaaabbbbaabbbbabaabbbbbaaabbbbabbaaabaabbababbbbbbabababaaaabbaababaaababbabbababbababbabbbbaabaabbbabaabbbababbabbabaabbababbaabbabbaabbbaaabaabbabaabbbabbbbbbabbabaabbabbbabbbbbaaaababbabbabbaabbaabaabbbababbaaaaaaaaaabbbbabbabbbbaabbaabbababbbbbaaabaaabbbaaaaabbaabbabbbababbbbbabbbbaaabbaabbaaabaaaaaa'));
