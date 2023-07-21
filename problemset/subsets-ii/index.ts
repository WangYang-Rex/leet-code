export function subsetsWithDup(nums: number[]): number[][] {
  const _nums: number[] = nums.sort();
  const n: number = nums.length;
  const set = new Set<string>();
  for (let i = 0; i < (1 << n); i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        arr.push(_nums[j]);
      }
    }
    set.add(arr.join(','))
  }

  const res: number[][] = [];
  set.forEach((item) => {
    if (item === '') {
      res.push([])
    } else {
      const it = item.split(',').map(i => Number(i));
      res.push(it)
    }
  })
  return res
}

// subsetsWithDup([0])
// subsetsWithDup([1, 2, 2])
