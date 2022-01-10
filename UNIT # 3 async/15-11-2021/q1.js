var a = [1, 4, 5, 8, 7, 9, 4, 7, 0, 7, 4, 1, 7, 4];
var ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < a.length; i++) {
  switch (a[i]) {
    case 0:
      ans[0]++;
      break;
    case 1:
      ans[1]++;
      break;
    case 2:
      ans[2]++;
      break;
    case 3:
      ans[3]++;
      break;
    case 4:
      ans[4]++;
      break;
    case 5:
      ans[5]++;
      break;
    case 6:
      ans[6]++;
      break;
    case 7:
      ans[7]++;
      break;
    case 8:
      ans[8]++;
      break;
    case 9:
      ans[9]++;
      break;
  }
}
console.log(ans);
