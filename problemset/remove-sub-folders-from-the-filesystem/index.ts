export function removeSubfolders(folder: string[]): string[] {
  // 排序
  const sorted = folder.sort((a, b) => {
    return a.length - b.length
  })
  // 遍历的同时 剪枝
  for (let i = 0; i < sorted.length; i++) {
    for (let j = sorted.length - 1; j > i; j--) {
      if ((`${sorted[j]}/`).indexOf(`${sorted[i]}/`) === 0)
        sorted.splice(j, 1)
    }
  }
  return sorted
}
