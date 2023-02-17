/**
 * 回溯
 * @param nums
 * @returns
 */
export function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  function backtrack(path: number[], _nums: number[]) {
    if (_nums.length === 0) {
      res.push([...path])
    } else {
      for (let i = 0; i < _nums.length; i++) {
        backtrack([...path, _nums[i]], _nums.slice(0, i).concat(_nums.slice(i + 1)))
      }
    }
  }
  backtrack([], [...nums])
  return res
}

/**
 * 动态规划
 * @param nums
 * @returns
 */
export function permute1(nums: number[]): number[][] {
  function fn(arr: number[], num: number): number[][] {
    const _res = [];
    if (arr.length > 0) {
      for (let i = 0; i <= arr.length; i++) {
        const aa = [...arr];
        aa.splice(i, 0, num)
        _res.push(aa)
      }
    } else {
      _res.push([num])
    }
    return _res
  }
  // f(x) 表示前x个数的排列组合
  // f(x) = fn(f(x), nums[x - 1]);
  let res: number[][] = [];
  nums.forEach((num: number) => {
    let temp: number[][] = [];
    if (res.length === 0) {
      temp.push([num]);
    } else {
      res.forEach((it: number[]) => {
        const _temp = fn(it, num);
        temp = temp.concat(_temp)
      })
    }
    res = [...temp]
  })
  return res
}
