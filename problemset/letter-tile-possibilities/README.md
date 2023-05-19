# 活字印刷

> 难度：中等
>
> https://leetcode.cn/problems/letter-tile-possibilities/

## 题目

你有一套活字字模 `tiles`，其中每个字模上都刻有一个字母 `tiles[i]`。返回你可以印出的非空字母序列的数目。

注意：本题中，每个活字字模只能使用一次。

### 示例 1：
```
输入："AAB"
输出：8
解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。
```
### 示例 2：
```
输入："AAABBC"
输出：188
```

### 示例 3：
```
输入："V"
输出：1
```

## 题解

```javascript
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

```
## python
```python
class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
      resSet = set()

      def fn(arr, char):
          def _fn(string, _char):
              for k in range(len(string) + 1):
                  _str = string[:k] + _char + string[k:]
                  resSet.add(_str)

          for j in range(len(arr)):
              _fn(arr[j], char)

      for i in range(len(tiles)):
          if i > 0:
              fn(list(resSet), tiles[i])
          resSet.add(tiles[i])

      return len(resSet)
```