export function longestWPI(hours: number[]): number {
  let days = 0;

  for (let left = 0; left < hours.length; left++) {
    let sum = 0;
    for (let right = left; right < hours.length; right++) {
      if (hours[right] > 8) {
        sum++
      } else {
        sum--
      }
      if (sum > 0 && right - left + 1 > days) {
        days = right - left + 1
      }
    }
  }

  return days
}
