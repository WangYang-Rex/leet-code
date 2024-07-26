/**
 * NO.1 数组快速排序
 * 平均时间复杂度：O(n log n)
 * 最坏时间复杂度：O(n²)
 * 空间复杂度：O(log n)（递归调用栈）
 * 特点：
 * 基于分治策略，选择一个“枢轴”元素，将数组分为小于和大于枢轴的两部分，然后递归排序。
 * 最坏情况下（如每次选择的枢轴是最大或最小元素），时间复杂度为 O(n²)。
 * 通常表现非常好，是实际中常用的排序算法之一。
 * @param arr
 * @returns
 */
export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left: number[] = [];
  const right: number[] = [];
  const equal: number[] = [];

  for (const num of arr) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

/**
 * NO.2 归并排序
 * 平均时间复杂度：O(n log n)
 * 最坏时间复杂度：O(n log n)
 * 空间复杂度：O(n)
 * 特点：
 * 基于分治策略，将数组分成两半，递归排序每一半，然后合并两个已排序的部分。
 * 稳定排序算法（即相同值的元素保持原来的顺序）。
 * 无论什么情况下，时间复杂度都是 O(n log n)。
 * @param arr
 * @returns
 */
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concat remaining elements (if any)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * NO.3 堆排序（Heap Sort）
 * 平均时间复杂度：O(n log n)
 * 最坏时间复杂度：O(n log n)
 * 空间复杂度：O(1)
 * 特点：
 * 使用堆数据结构（通常是二叉堆）来排序元素。
 * 在数组内部进行排序，不需要额外的存储空间。
 * 不稳定排序算法。
 * @param arr
 */
export const heapSort = (arr: number[]): number[] => {
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}
function heapify(arr: number[], n: number, i: number) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

/**
 * NO.4 希尔排序（Shell Sort）
 * 平均时间复杂度：介于 O(n log n) 和 O(n²) 之间
 * 最坏时间复杂度：O(n²)
 * 空间复杂度：O(1)
 * 特点：
 * 基于插入排序的改进，通过比较距离较远的元素来进行排序。
 * 性能依赖于选择的增量序列，最坏情况下复杂度为 O(n²)。
 * @param arr
 */
export const shellSort = (arr: number[]): number[] => {
  const n = arr.length;

  // Start with a large gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Perform a gapped insertion sort for this gap size
    for (let i = gap; i < n; i++) {
      // Save arr[i] in temp and make a hole at position i
      const temp = arr[i];

      // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
      let j: number;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      // Put temp (the original arr[i]) in its correct location
      arr[j] = temp;
    }
  }

  return arr;
}

/**
 * NO.5 插入排序（Insertion Sort）
 * 平均时间复杂度：O(n²)
 * 最坏时间复杂度：O(n²)
 * 空间复杂度：O(1)
 * 特点：
 * 每次将一个元素插入到已经排序的部分。
 * 对于小规模数组或几乎有序的数组，表现很好。
 * 稳定排序算法。
 * @param arr
 */
export const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

/**
 * NO.6 选择排序（Selection Sort）
 * 平均时间复杂度：O(n²)
 * 最坏时间复杂度：O(n²)
 * 空间复杂度：O(1)
 * 特点：
 * 每次选择最小（或最大）的元素，放到数组的起始位置。
 * 不稳定排序算法。
 * @param arr
 */
export const selectionSort = (arr: number[]): number[] => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted part of the array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

/**
 * NO.7 冒泡排序（Bubble Sort）
 * 平均时间复杂度：O(n²)
 * 最坏时间复杂度：O(n²)
 * 空间复杂度：O(1)
 * 特点：
 * 通过相邻元素的比较和交换，使较大（或较小）的元素逐渐从后面移动到前面。
 * 稳定排序算法。
 * @param arr
 */
export const bubbleSort = (arr: number[]): number[] => {
  let n = arr.length;
  let swapped: boolean;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap arr[i] and arr[i + 1]
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    // Each pass through the array, the largest element "bubbles" to the end
    n--; // Reduce the array length by one for the next pass
  } while (swapped);

  return arr;
}
