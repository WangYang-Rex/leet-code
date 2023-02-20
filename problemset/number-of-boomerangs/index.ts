export function numberOfBoomerangs(points: number[][]): number {
  const fn = (pointA: number[], pointB: number[]) => {
    const _res = (pointA[0] - pointB[0]) * (pointA[0] - pointB[0]) + (pointA[1] - pointB[1]) * (pointA[1] - pointB[1])
    return _res
  }

  let count = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      for (let k = 0; k < points.length; k++) {
        if (i !== j && j !== k && i !== k) {
          if (fn(points[i], points[j]) === fn(points[i], points[k])) {
            count++;
          }
        }
      }
    }
  }
  return count
}
