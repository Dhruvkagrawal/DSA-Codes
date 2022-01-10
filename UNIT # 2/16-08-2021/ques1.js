var a = [
  [0, 1, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 1],
];
count = 0;
for (let i = 0; i < a.length; i++) {
  arr = [];
  sub = [];
  for (let j = a.length - 1; j >= 0; j--) {
    arr.push(a[i][j]);
    sub.push(arr);
  }
}
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
  console.log(sub[i]);
  console.log("-------");
  if (a[i] !== sub[i]) {
    count++;
  }
}
console.log(count);

// var a = [0, 1, 1, 0];
// var b = [0, 1, 1, 0];
// if (a[1] === b[1]) {
//   console.log("yes");
// }
