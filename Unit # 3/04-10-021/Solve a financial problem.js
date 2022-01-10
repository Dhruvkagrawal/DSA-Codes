var a = [100, 60, 70, 65, 80, 85];
ans = [];
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {
      ans.push(a[i]);
      break;
    }
  }
}
console.log(ans);
// console.log(ans);
