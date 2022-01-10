a = [8, 87, 5, 75, 78, 41, 745, 4, 5, 7714, 877, 1, 55, 874, 25, 8, 412];

function merge(leftArray, rightArray) {
  var ans = [];
  let left = 0;
  let rightIndex = 0;

  while (left < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[left] < rightArray[rightIndex]) {
      ans.push(leftArray[left]);
      left++;
    } else {
      ans.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  const slicedLeft = leftArray.slice(left);
  const slicedRight = rightArray.slice(rightIndex);

  return ans.concat(slicedLeft).concat(slicedRight);
}

function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middleIndex = Math.floor(unsortedArray.length / 2);
  const leftArray = unsortedArray.slice(0, middleIndex);
  const rightArray = unsortedArray.slice(middleIndex);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
}
console.log(mergeSort(a));
