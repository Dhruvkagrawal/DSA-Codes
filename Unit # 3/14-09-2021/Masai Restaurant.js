var a = [[1], [2, 5], [2, 7], [2, 9], [1], [1]];
arr = [];
for (let i = 0; i < a.length; i++) {
  if (a[i][0] === 1) {
    arr.push(a[i - 1]);
    a.pop(a[i - 1]);
  }
}
console.log(a);
console.log(arr);
