const LOG = 16
export class TreeAncestor {
  private ancestors: number[][] = [];
  constructor(n: number, parent: number[]) {
    const ancestors = new Array(n).fill(0).map(() => new Array(LOG).fill(-1));
    for (let i = 0; i < n; i++) {
      ancestors[i][0] = parent[i];
    }
    for (let j = 1; j < LOG; j++) {
      for (let i = 0; i < n; i++) {
        if (ancestors[i][j - 1] !== -1) {
          ancestors[i][j] = ancestors[ancestors[i][j - 1]][j - 1];
        }
      }
    }
    this.ancestors = ancestors;
  }

  getKthAncestor(node: number, k: number): number {
    for (let j = 0; j < LOG; j++) {
      if (((k >> j) & 1) !== 0) {
        node = this.ancestors[node][j];
        if (node === -1) {
          return -1;
        }
      }
    }
    return node;
  }
}
