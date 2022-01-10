var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var n = Math.floor(a.length / 2);
var temp = 0;
for (let i = 0; i <= n; i++) {
  for (let j = i; j <= n - i - 1; j++) {
    temp = a[i][j];
    a[i][j] = a[n - j - 1][i];
    a[n - j - 1][i] = a[n - j - 1][n - j - 1];
    a[n - j - 1][n - j - 1] = a[j][n - i - 1];
    a[j][n - i - 1] = temp;
    console.log(temp);
  }
}
