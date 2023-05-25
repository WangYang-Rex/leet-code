/** 哈希 */
export function oddString(words: string[]): string {
  const map: any = {}
  for (let i = 0; i < words.length; i++) {
    const difference = [];
    for (let j = 0; j < words[i].length - 1; j++) {
      difference.push(words[i].charCodeAt(j + 1) - words[i].charCodeAt(j));
      // difference.push((words[i][j + 1] as any) - (words[i][j] as any));
    }
    const key = difference.join(',');
    map[key] = [...(map[key] || []), words[i]]
  }

  let ans = '';
  Object.keys(map).forEach((key) => {
    if (map[key].length === 1) {
      ans = map[key][0]
    }
  })
  return ans
}

// oddString(['abm', 'bcn', 'alm']);
// oddString(['aaa', 'bob', 'ccc', 'ddd']);
