export function circularPermutation(n: number, start: number): number[] {
  const ret = [start];
  for (let i = 1; i <= n; i++) {
    const m = ret.length;
    for (let j = m - 1; j >= 0; j--) {
      ret.push(((ret[j] ^ start) | (1 << (i - 1))) ^ start);
    }
  }
  return ret
}
