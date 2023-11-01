function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Pick the first value as the pivot
  let pivot = arr[0];

  let left = [], right = [];

  // Orient the pivot so that...
  let i = 0;
  while (i < arr.length) {
    // every number smaller than the pivot is to the left
    if (arr[i] < pivot) left.push(arr[i])
    // every number larger (or equal) than the pivot is to the right
    else if (arr[i] > pivot) {
      right.push(arr[i])
    }
    i++;
  }

  // Recursively sort the left
  left = quicksort(left);
  // quicksort(left);
  // Recursively sort the right
  right = quicksort(right);
  // quicksort(right);

  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
  // return left;

}

const arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
// const arr = [2, 4, 9, 0];
console.log(quicksort(arr));
// quicksort(arr);

module.exports = [quicksort];

/*
// [2,4,6,8,1,3,5,7,9]
// pivot = arr[0]; start = 0, end = arr.length - 1;
// let left = [], right = []
// while (i < arr.length) {
  if(arr[i] < pivot) ===> left;
  else ===> right
} */
