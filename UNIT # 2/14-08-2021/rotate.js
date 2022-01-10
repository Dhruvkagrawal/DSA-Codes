var a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// n = a.length / 2;
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < n - i - 1; j++) {
//     temp = a[i][j];
//     a[n - j - 1][i] = a[n - i - 1][n - j - 1];
//     a[n - i - 1][n - j - 1] = a[j][n - j - 1];
//     a[j][n - i - 1] = temp;
//     console.log(a);
//   }
// }

n = a.length / 2;
top = 0;
left = 0;
right = n - 1;
bottom = n - 1;
for (let j = 0; j < a.length; j++) {
  previous = a[top + 1][left];
  for (let i = 0; i <= right; i++) {
    temp = a[top][i];
    a[top][i] = previous;
    previous = temp;
  }
  top++;
  for (let i = top; i <= bottom; i++) {
    temp = a[i][right];
    a[i][right] = previous;
    previous = temp;
  }
  right--;
  for (let i = right; i >= left; i--) {
    temp = a[bottom][i];
    a[bottom][i] = previous;
    previous = temp;
  }
  bottom--;
  for (let i = bottom; i >= top; i--) {
    temp = a[i][left];
    a[i][left] = previous;
    previous = temp;
  }
  left++;
}
console.log(a);
