export function isHappy(n: number): boolean {
  let res: boolean = n === 1;
  const arr: number[] = [n];
  while (n !== 1) {
    const sum = n.toString().split('').reduce((s, cur) => {
      const curNum = Number(cur);
      return s + curNum * curNum;
    }, 0);
    if (arr.includes(sum)) {
      break;
    }
    if (sum === 1) {
      res = true;
      break;
    }
    arr.push(sum);
    n = sum;
  }
  return res;
}
