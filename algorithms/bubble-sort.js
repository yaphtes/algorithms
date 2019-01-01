const arr = [3, 8, 4, 1, 9, 6, 5, 2, 7, 11, 0, 12];

function bubbleSort(arr) {
  let sortedIndex = 0;

  for (let i = arr.length - 1; i > 0 ; i--) {
    for (let j = arr.length - 1; j > sortedIndex; j--) {
      if (arr[j] < arr[j - 1]) {
        const tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }

    sortedIndex++;
  }

  return arr;
}
