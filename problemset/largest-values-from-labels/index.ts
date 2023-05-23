export function largestValsFromLabels(values: number[], labels: number[], numWanted: number, useLimit: number): number {
  const n = values.length;
  const idx = Array.from(Array(n), (_, i) => i);
  idx.sort((i, j) => values[j] - values[i]);

  let ans = 0; let choose = 0;
  const cnt: any = {};
  for (let i = 0; i < n; i++) {
    const label = labels[idx[i]];
    if (cnt[label] === useLimit) {
      continue;
    }
    choose++;
    ans += values[idx[i]];
    cnt[label] = (cnt[label] || 0) + 1;
    if (choose === numWanted) {
      break;
    }
  }
  return ans;
}
