export function miceAndCheese(reward1: number[], reward2: number[], k: number): number {
  // 找出每个位置如果被1被2吃掉的差值 排序
  let arr = [];
  for (let i = 0; i < reward1.length; i++) {
    arr.push({
      index: i,
      difference: reward2[i] - reward1[i],
    })
  }

  arr = arr.sort((a, b) => {
    return b.difference - a.difference;
  })

  let ans = reward1.reduce((res, cur) => {
    return res + cur
  }, 0)

  let i = 0;
  while (i < reward1.length - k) {
    ans = ans + arr[i].difference
    i++
  }

  return ans
}
