import { decimalToBinary } from '../../utils/decimalToBinary'
export function queryString(s: string, n: number): boolean {
  let res = true;
  for (let i = 1; i <= n; i++) {
    const binary = decimalToBinary(i);
    if (!s.includes(binary)) {
      res = false;
      break;
    }
  }

  return res;
}
