var a = [100, 80, 60, 70, 75, 85];
arr = [];
for (let i = 1; i < a.length; i++) {
  count = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (a[j] <= a[i]) {
      count++;
    }
    console.log(a[j] + "<====" + a[i]);
    console.log(count);
  }
  //   arr.push(count);
}
// console.log(arr);
