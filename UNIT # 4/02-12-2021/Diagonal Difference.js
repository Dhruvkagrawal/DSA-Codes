function diagonalDifference(arr) {
  let dia1 = 0;
  let dia2 = 0;
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        dia1 = dia1 + arr[i][j];
      }
      if (i + j === arr.length - 1) {
        dia2 = dia2 + arr[i][j];
      }
    }
  }
  var ans = Math.abs(dia1 - dia2);
  return ans;
}

var arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
console.log(diagonalDifference(arr));
