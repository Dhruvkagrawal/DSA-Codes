let a = [1, 3, 5];
let b = [2, 6, 8];
var parkings = 2;
count = 1;

function solve(a, b, parkings, count) {
  for (let i = 0; i < a.length; i++) {
    let low = a[i + 1];
    let high = b[i];
    if (high < low && count > parkings) {
      count++;
      low = a[i++ + 1];
      high = b[i++];
    } else if (count < parkings) {
      console.log("Not Possible");
      return;
    }
  }
  console.log("Possible");
}
solve(a, b, parkings, count);
