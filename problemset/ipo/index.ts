export function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
  const items = [];
  for (let i = 0; i < profits.length; i++) {
    items.push({
      p: profits[i],
      c: capital[i],
    });
  }
  items.sort((a, b) => {
    return a.c - b.c
  });
  // 每次都找可承受的收益最多的项目
  let num = 0;
  while (num < k) {
    if (k - num >= items.length && w >= items[items.length - 1].c) {
      for (let i = 0; i < items.length; i++) {
        w = w + items[i].p;
      }
      return w
    }
    num++;
    if (items.length > 0) {
      let max = 0;
      let index = null;
      for (let i = 0; i < items.length; i++) {
        // 找出成本够的利润最大的项目
        if (w >= items[i].c) {
          if (!max || items[i].p > max) {
            max = items[i].p;
            index = i;
          }
        }
        else {
          break;
        }
      }
      if (index != null && max && max > 0) {
        items.splice(index, 1);
        w = w + max
      }
    }
  }
  return w;
}
