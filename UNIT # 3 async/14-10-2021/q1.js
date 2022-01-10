var a = Array(10).fill(Array(10).fill("0"));
count = 0;
function que(n, i, j) {
  if (i < 0 || j > 9 || j < 0 || i > 9) {
    return;
  }
  if (n === 0) {
    count++;
    console.log(count);
    a[i][j] = 1;
    return count;
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
console.log(que(3, 3, 1));
que(3, 3, 1);
