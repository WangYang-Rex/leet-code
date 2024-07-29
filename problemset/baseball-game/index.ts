export function calPoints(operations: string[]): number {
  if (operations.length === 0) {
    return 0;
  }
  const arr: number[] = [];
  let res = 0;
  while (operations.length > 0) {
    const x = operations.shift() as string;
    if (x === '+') {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2])
      res += arr[arr.length - 1];
    } else if (x === 'D') {
      arr.push(arr[arr.length - 1] * 2)
      res += arr[arr.length - 1];
    } else if (x === 'C') {
      res -= arr[arr.length - 1];
      arr.pop();
    } else {
      arr.push(parseInt(x))
      res += arr[arr.length - 1];
    }
  }

  return res;
  // return arr.reduce((prev, curr) => prev + curr, 0);
}
