var a = "aaabccddd";
arr = [];
for (let i = 0; i < a.length; i++) {
  if (a[i] === a[i + i]) {
    arr.push(a[i]);
  }
}
console.log(arr);
