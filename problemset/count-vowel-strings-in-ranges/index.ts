export function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelArr = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (vowels.includes(word[0]) && vowels.includes(word[word.length - 1])) {
      vowelArr.push(1)
    } else {
      vowelArr.push(0)
    }
  }
  const ans = [];
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    let count = 0;
    for (let j = start; j <= end; j++) {
      if (vowelArr[j] === 1) {
        count++;
      }
    }
    ans.push(count);
  }
  return ans
}
