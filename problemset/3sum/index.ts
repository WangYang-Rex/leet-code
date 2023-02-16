export function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  let last: any;
  const res: number[][] = [];
  const sets = new Set(); // 专门做去重
  if (nums.length < 3) {
    return res;
  }
  for (let i = 0; i < nums.length; i++) {
    let b, c;
    const a = nums[i];
    if (a !== last) {
      last = a;
      // 寻找下一个数
      for (let j = i + 1; j < nums.length; j++) {
        b = nums[j];
        c = 0 - a - b;
        // 说明 a+b+c = 0
        if (j <= nums.length - 2) {
          if (nums.slice(j + 1).includes(c)) {
            const _resStr = `${a}${b}${c}`;
            if (!sets.has(_resStr)) {
              sets.add(_resStr);
              res.push([a, b, c])
            }
          }
        }
      }
    }
  }
  return res
}
