export function romanToInt(s: string): number {
  let res = 0;
  const obj: Record<string, number> = {
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4,
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  }
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    while (s.includes(key)) {
      res += obj[key];
      s = s.replace(key, '');
    }
  }
  return res
}
