export function hammingWeight(n: number): number {
  let ans = 0;
  const _n = n.toString(2)
  for (let i = 0; i < _n.length; i++) {
    if (_n[i] === '1') {
      ans++
    }
  }
  return ans
}

export function hammingWeight2(n: number): number {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & 1) === 1) ans++
    n >>>= 1
  }
  return ans
}
