export function fizzBuzz(n: number): string[] {
  const fn = (k: number) => {
    const res3 = k % 3;
    const res5 = k % 5;
    let res = k.toString();
    if (res3 === 0 && res5 === 0) {
      res = 'FizzBuzz'
    } else {
      if (res3 === 0) {
        res = 'Fizz'
      } else if (res5 === 0) {
        res = 'Buzz'
      }
    }
    return res;
  }
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(fn(i))
  }
  return result
}
