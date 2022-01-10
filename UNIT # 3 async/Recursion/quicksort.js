var a = [
  7, 8, 4, 887, 45, 7, 1485, 7, 125, 874, 14, 1452, 65, 12, 47, 212, 47, 5,
  48211, 4,
];

function quickSort(A) {
  var smaller = [];
  var larger = [];
  if (A.length <= 1) {
    return A;
  }
  for (var i = 1; i < A.length; i++) {
    if (A[i] < A[0]) {
      smaller.push(A[i]);
    }
    if (A[i] >= A[0]) {
      larger.push(A[i]);
    }
  }
  return quickSort(smaller).concat(A[0], quickSort(larger));
}
console.log(quickSort(a));
