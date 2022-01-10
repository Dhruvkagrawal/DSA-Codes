var a = [3, 4, 5, 1, 2];
function solve(a) {
  low = 0;
  high = a.length - 1;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    // console.log(mid);
    if (a[mid] < a[low]) {
      high = mid - 1;
    } else {
      ans = mid;
      low = mid - 1;
    }
    return ans;
  }
}
console.log(solve(a));
