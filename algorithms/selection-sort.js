const arr = [3, 8, 4, 1, 9, 6, 5, 2, 7, 11, 0];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    const tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }

  return arr;
}
