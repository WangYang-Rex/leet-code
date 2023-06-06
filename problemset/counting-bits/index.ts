export function countBits(n: number): number[] {
  // 0 --> 0 2^0
  // 1 --> 1 余1
  // 2 --> 10 2^1
  // 3 --> 11 2^1+1
  // 4 --> 100
  // 5 --> 101
  // 6 --> 110
  // 7 --> 111
  // 8 --> 1000
  // 9 --> 1001
  // 10 --> 1010
  // 11 --> 1011
  // 12 --> 1100
  // 13 --> 1101
  // 14 --> 1110

  // 规律
  // DP[i] = DP[i-1]
  const bits = new Array(n + 1).fill(0);
  let highBit = 0;
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) === 0) {
      highBit = i;
    }
    bits[i] = bits[i - highBit] + 1;
  }
  return bits;
}
