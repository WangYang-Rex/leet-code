/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param height {number}
 * @return {number}
 */
export function maxArea(height: number[]): number {
  let res = 0;
  let l = 0;
  let r = height.length - 1;
  let _res = 0;
  while (l < r) {
    _res = Math.min(height[l], height[r]) * (r - l);
    if (_res > res) {
      res = _res;
    }
    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return res
}
