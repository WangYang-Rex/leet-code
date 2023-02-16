export function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);
  let x = null;
  let sum: any;
  let a, b, c;
  for (let i = 0; i < nums.length; i++) {
    a = nums[i];
    // 寻找下一个数
    for (let j = i + 1; j < nums.length; j++) {
      b = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        c = nums[k];
        // 计和
        const _sum = a + b + c;
        // 计差
        const _x = _sum > target ? _sum - target : target - _sum;
        // 如果不存在过，直接赋值
        if (x === null || _x < x) {
          x = _x;
          sum = _sum
        }
      }
    }
  }
  return sum
}
