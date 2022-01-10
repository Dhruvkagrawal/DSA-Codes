var a = Array(11).fill(Array(11).fill(0));
console.log(a);

count = 0;
function que(n, i, j) {
  if (i < 0 || j > 9 || j < 0 || i > 9) {
    return;
  }
  if (n === 0) {
    count++;
    a[i][j] = 1;
    return;
  }
  que(n - 1, i - 2, j + 1);
  que(n - 1, i - 2, j - 1);
  que(n - 1, i - 1, j + 2);
  que(n - 1, i - 1, j - 2);
  que(n - 1, i + 2, j + 1);
  que(n - 1, i + 2, j - 1);
  que(n - 1, i + 1, j - 2);
  que(n - 1, i + 1, j + 2);
}
// que(3, 3, 1);
