export function divisorGame(n: number): boolean {
  const DP = new Array(n + 1).fill(false);
  DP[1] = false; // 必败
  DP[2] = true // 必胜
  DP[3] = false // 必胜
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0 && DP[i - j] === false) {
        DP[i] = true
        break
      }
    }
  }
  return DP[n]
}

export function divisorGame1(n: number): boolean {
  return n % 2 === 0
}

// divisorGame(2)
// divisorGame(3)
// divisorGame(4)
divisorGame(5)
