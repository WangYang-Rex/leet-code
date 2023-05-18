/** 数学组合 */
export function maximalNetworkRank(n: number, roads: number[][]): number {
  const connect = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const degree = new Array(n).fill(0);
  for (const road of roads) {
    const x = road[0]; const y = road[1];
    connect[x][y] = true;
    connect[y][x] = true;
    degree[x]++;
    degree[y]++;
  }

  let first = -1; let second = -2;
  let firstArr: any[] = [];
  let secondArr: any[] = [];
  for (let i = 0; i < n; ++i) {
    if (degree[i] > first) {
      second = first;
      secondArr = [...firstArr];
      first = degree[i];
      firstArr = [i];
    } else if (degree[i] === first) {
      firstArr.push(i);
    } else if (degree[i] > second) {
      secondArr = [];
      second = degree[i];
      secondArr.push(i);
    } else if (degree[i] === second) {
      secondArr.push(i);
    }
  }
  if (firstArr.length === 1) {
    const u = firstArr[0];
    for (const v of secondArr) {
      if (!connect[u][v]) {
        return first + second;
      }
    }
    return first + second - 1;
  } else {
    const m = roads.length;
    if (firstArr.length * (firstArr.length - 1) / 2 > m) {
      return first * 2;
    }
    for (const u of firstArr) {
      for (const v of firstArr) {
        if (u !== v && !connect[u][v]) {
          return first * 2;
        }
      }
    }
    return first * 2 - 1;
  }
}
/**
 * 统计
 */
// export function maximalNetworkRank1(n: number, roads: number[][]): number {
//   const obj: any = {};
//   const arr: any = [];
//   if (roads.length === 0) return 0
//   roads.map((road: number[]) => {
//     const [a, b] = road;
//     if (!obj[a]) {
//       obj[a] = new Set();
//       obj[a].add(a)
//       arr.push(obj[a])
//     }
//     obj[a].add(b)
//     if (!obj[b]) {
//       obj[b] = new Set();
//       obj[b].add(b)
//       arr.push(obj[b])
//     }
//     obj[b].add(a)
//     return road
//   })

//   arr.sort((a: any, b: any) => b.size - a.size)

//   const arr0 = [...arr[0]];
//   const arr1 = [...arr[1]];

//   let res = arr0.length - 1 + arr1.length - 1 + (arr0.includes(arr1[0]) ? -1 : 0)
//   if (arr0.includes(arr1[0])) {
//     for (let i = 2; i < arr.length; i++) {
//       const arr2 = [...arr[i]];
//       const _res = arr1.length - 1 + arr2.length - 1 + (arr1.includes(arr2[0]) ? -1 : 0)
//       if (_res > res) {
//         res = _res;
//         break;
//       }
//     }
//   }
//   return res
// }
