var a = [5, 4, 2, 4];
a = a.sort();
count = 0;
b = 10;
i = 0;
function solve(a, b, count, i) {
  if (b == 0) {
    return count;
  }
  // console.log(count);
  // console.log(i);
  count++;
  return solve(a, b - a[i++], count, i);
  // return count;
}

console.log(solve(a, b, count));
