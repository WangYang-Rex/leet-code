/**
 * 动态规划
 * @param s
 * @param words
 * @returns
 */
export function findSubstring(s: string, words: string[]): number[] {
  const fn = function(s: string, words: string[]) {
    const wordLength = words[0].length;
    let pipei = true;
    while (pipei && words.length > 0) {
      const _s = s.slice(0, wordLength);
      const _index = words.indexOf(_s);
      if (_index >= 0) {
        s = s.slice(wordLength);
        words.splice(_index, 1);
      } else {
        pipei = false
      }
    }
    return words.length === 0
  }
  const res = [];
  for (let i = 0; i < s.length; i++) {
    const t = s.slice(i);
    if (t.length >= words.length * words[0].length) {
      if (fn(t, [...words])) {
        res.push(i)
      }
    }
  }
  return res
}

/**
 * 滑动窗口
 * @desc 时间复杂度 O(NM) 空间复杂度 O(M)  N=s长度 M=单词数量
 * @param s
 * @param words
 */
export function findSubstring1(s: string, words: string[]): number[] {
  const sLen: number = s.length
  const wordLen: number = words[0].length
  const wordNum: number = words.length
  const wLen: number = wordLen * wordNum

  // 利用Map对word进行去重，并保存出现次数
  const wordMap = new Map<string, number>()
  for (const word of words) {
    const count: number = wordMap.has(word) ? wordMap.get(word)! : 0
    wordMap.set(word, count + 1)
  }

  const res: number[] = []
  let left = 0
  let right: number = wLen - 1
  while (right < sLen) {
    right++
    if (right - left === wLen) {
      // 当窗口长度刚好等于wLen，就进行匹配
      if (match()) res.push(left)
      left++
    }
  }

  return res

  function match(): boolean {
    // 获取窗口字符串
    const str = s.substring(left, right)
    // 按长度拆分str，并统计单词出现次数
    const map = new Map<string, number>()
    for (let i = 0; i < wordNum; i++) {
      const word = str.substring(i * wordLen, (i + 1) * wordLen)
      const count: number = map.has(word) ? map.get(word)! : 0
      map.set(word, count + 1)
    }

    // map和wordMap继续匹配
    for (const [key, value] of wordMap) {
      if (!map.has(key) || map.get(key) !== value)
        return false
    }
    return true
  }
}
