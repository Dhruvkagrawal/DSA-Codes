var a = [39, 27, 11, 4, 24, 32, 32, 1];
console.log(-1);
for (let i = 1; i < a.length; i++) {
  let j;
  for (let j = i - 1; j >= 0; j--) {
    if (a[i] > a[j]) {
      console.log(a[j]);
      break;
    }
  }
  if (j == -1) {
    console.log(-1);
  }
}
