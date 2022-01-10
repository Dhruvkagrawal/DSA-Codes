var a = [
  ["rancho", 45],
  ["chatur", 32],
  ["raju", 30],
  ["farhan", 38],
  ["virus", 32],
  ["joy", 45],
];
// console.log(a[1]);

function checkStrings(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] !== a[i + 1][0]) {
      return false;
    }
  }
  return false;
}
console.log(checkStrings(a));
