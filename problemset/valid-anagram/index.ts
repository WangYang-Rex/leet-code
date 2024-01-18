export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  const mapS = new Map<string, number>();
  const mapT = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
    mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
  }

  if (mapS.size !== mapT.size) {
    return false;
  }

  let ans = true;

  for (const key of mapS.keys()) {
    if (mapS.get(key) !== mapT.get(key)) {
      ans = false;
      break;
    }
  }
  return ans
}

// copilot 生成
export function isAnagram1(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const mapS = new Map<string, number>();
  const mapT = new Map<string, number>();

  // Count the frequency of each character in string s
  for (const char of s) {
    mapS.set(char, (mapS.get(char) || 0) + 1);
  }
  for (const char of t) {
    mapT.set(char, (mapT.get(char) || 0) + 1);
  }

  // Count the frequency of each character in string t
  for (const [char, count] of mapS) {
    if (mapT.get(char) !== count) {
      return false;
    }
  }

  return true;
}
