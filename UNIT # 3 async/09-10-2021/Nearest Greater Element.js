var a = [5, 4, 1, 3, 2,8];
arr = [];
for (let i = 0; i < a.length; i++) {
  for (let j = i; j >= 0; j--) {
    if (a[i] < a[j]) {
      arr.push(a[j]);
      break;
    }
    if (j === 0) {
      arr.push(-1);
    }
  }
}
console.log(arr);
