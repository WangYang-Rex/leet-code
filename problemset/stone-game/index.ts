export function stoneGame(piles: number[]): boolean {
  // DP[i] 表示从 _piles 开始，先手能拿到的石子最大值
  const DP: Record<string, number> = {};
  /**
   * 获取 _piles 先手能拿到的最大值
   * @param _piles
   * @returns
   */
  const fn = (_piles: number[]): number => {
    const key = _piles.toString();
    if (!DP[key]) {
      if (_piles.length >= 3) {
        // // 如果拿走第一个
        // let first = _piles[0];
        // // 余下的
        // let rest = _piles.slice(1);
        // // 第二人拿走左边的
        // let rest_left = rest.slice(1);
        // // 第二人拿走右边的
        // let rest_right = rest.slice(0, rest.length - 1);
        const sum_left = _piles[0] + Math.max(
          fn(_piles.slice(1, _piles.length - 1)),
          fn(_piles.slice(2, _piles.length)),
        );
        const sum_right = _piles[_piles.length - 1] + Math.max(
          fn(_piles.slice(0, _piles.length - 2)),
          fn(_piles.slice(1, _piles.length - 1)),
        )
        DP[key] = Math.max(sum_left, sum_right);
      } else if (_piles.length === 2) {
        DP[key] = Math.max(_piles[0], _piles[1]);
      } else if (_piles.length === 1) {
        DP[key] = _piles[0]
      }
    }
    return DP[key];
  }
  const sum = piles.reduce((_sum, item) => {
    return _sum + item;
  }, 0)
  const first = fn(piles);

  return first > sum - first
}
