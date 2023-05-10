export function groupAnagrams(strs: string[]): string[][] {
  const obj: Record<string, string[]> = {};
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join('');
    if (obj[key]) {
      obj[key].push(strs[i])
    } else {
      obj[key] = [strs[i]]
    }
  }
  const arr: string[][] = [];
  Object.keys(obj).forEach((key) => {
    arr.push(obj[key])
  })
  return arr
}
