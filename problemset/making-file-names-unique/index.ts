
const addSuffix = (name: string, k: string) => {
  return `${name}(${k})`;
};

export function getFolderNames(names: string[]): string[] {
  const index = new Map();
  const n = names.length;
  const res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const name = names[i];
    if (!index.has(name)) {
      res[i] = name;
      index.set(name, 1);
    } else {
      let k = index.get(name);
      while (index.has(addSuffix(name, k))) {
        k++;
      }
      res[i] = addSuffix(name, k);
      index.set(name, k + 1);
      index.set(addSuffix(name, k), 1);
    }
  }
  return res;
}
