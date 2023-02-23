export function fib(n: number): number {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }

  let f = 1; let f1 = 1; let f2 = 0;
  let index = 2;
  while (index <= n) {
    f = f1 + f2;
    index++;
    f2 = f1;
    f1 = f;
  }
  return f
}
