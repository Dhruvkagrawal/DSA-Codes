var a = [5, 4, 1, 3, 2];
arr = [];
stack = [];
i = 0;
while (i < a.length && stack.length !== 0) {
  if (a[i] > a[i + 1]) {
    arr.push(a[i]);
    stack.push(a[i]);
    i++;
  } else {
    i++;
  }
}
if (stack.length === 0) {
  arr.push(-1);
}
console.log(arr);
