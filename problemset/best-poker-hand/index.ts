/* eslint-disable no-prototype-builtins */
/**
 * 模拟
 * @param ranks
 * @param suits
 * @returns
 */
export function bestHand(ranks: number[], suits: string[]): string {
  const ranksObj: Record<string, number> = {};
  const suitsObj: any = {};
  let maxRank = 0;
  let maxSuit = 0;

  ranks.forEach((it) => {
    const _it = it.toString();
    if (ranksObj.hasOwnProperty(_it)) {
      ranksObj[_it]++;
    } else {
      ranksObj[_it] = 1;
    }
    if (ranksObj[_it] > maxRank) {
      maxRank = ranksObj[_it];
    }
  })
  suits.forEach((it) => {
    if (suitsObj.hasOwnProperty(it)) {
      suitsObj[it]++;
    } else {
      suitsObj[it] = 1
    }
    if (suitsObj[it] > maxSuit) {
      maxSuit = suitsObj[it];
    }
  })
  // 判断 Flush
  if (maxSuit >= 5) {
    return 'Flush'
  }
  // 判断 3条
  if (maxRank >= 3) {
    return 'Three of a Kind'
  }
  // 判断 2条
  if (maxRank >= 2) {
    return 'Pair'
  }
  // 高牌
  return 'High Card'
}
