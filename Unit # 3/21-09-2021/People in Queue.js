var a = [[1, 1], [1, 2], [1, 3], [2], [2], [2]];
arr = [];
for (let i = 0; i < a.length; i++) {
  if (a[i][0] === 1 && arr.length < 2) {
    arr.push(a[i][1]);
  } else if (a[i][0] === 1 && arr.length >= 2) {
    arr.push(-1);
  }
}
console.log(arr);
for (let i = 0; i < a.length; i++) {
  if (a[i] === 2) {
    arr.pop();
  }
}
console.log(arr);
