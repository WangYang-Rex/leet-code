export function numTilePossibilities(tiles: string): number {
  const resSet: Set<string> = new Set();

  const fn = (arr: string[], char: string) => {
    const _fn = (str: string, _char: string) => {
      for (let k = 0; k <= str.length; k++) {
        const _str = str.slice(0, k) + _char + str.slice(k);
        resSet.add(_str);
      }
    }
    for (let j = 0; j < arr.length; j++) {
      _fn(arr[j], char);
    }
  }

  for (let i = 0; i < tiles.length; i++) {
    // console.log(i, tiles[i], resSet);
    if (i > 0) {
      fn([...resSet], tiles[i]);
    }
    resSet.add(tiles[i])
    // console.log(i, resSet);
  }

  return resSet.size;
}
