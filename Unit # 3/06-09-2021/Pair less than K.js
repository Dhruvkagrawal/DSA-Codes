a = [1, 2, 3, 4, 5];
k = 7;
function part1(a, k) {
  i = 0;
  j = a.length - 1;
  high = 0;
  while (i < j) {
    sum = 0;
    sum = a[i] + a[j];
    i++;
    if (sum > k) {
      high = sum;
    } else {
      high = -1;
    }
  }
  return high;
}
console.log(part1(a, k));
