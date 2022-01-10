var a = [2, 3, 3, 3, 6, 9];
var key = 3;
low = 0;
high = a.length - 1;
count = 0;
function solve(a, key, low, high, count) {
  while (low <= high) {
    return;
  }
  mid = low + (high - low) / 2;
  if (a[mid]===key) {
      count++
  }
  if (a[mid]>key) {
      
  }
}
