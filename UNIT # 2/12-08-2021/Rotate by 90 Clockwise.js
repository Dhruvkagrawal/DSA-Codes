// var a = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < a.length; i++) {
//   arr = [];
//   for (let j = a[i].length - 1; j >= 0; j--) {
//     arr.push(a[j][i]);
//   }
//   console.log(arr.join(" "));
// }

function runProgram(input) {
  var n = input.trim().split("\n");
  var t = +n[0];
  for (let i = 1; i < n.length; i++) {
    n[i] = n[i].trim().split(" ").map(Number);
  }
  n = n.splice(1, n.length - 1);
  mat = [];
  for (let i = 0; i < t; i++) {
    mat = n.splice(0, n[0][0] + 1);
    check(mat);
  }
  function check(a) {
    var size = a[0][0];
    a = a.slice(1);
    for (let i = 0; i < a.length; i++) {
      arr = [];
      for (let j = a[i].length - 1; j >= 0; j--) {
        arr.push(a[j][i]);
      }
      console.log(arr.join(" "));
    }
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2
    4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
    3
    1 2 3
    4 5 6
    7 8 9`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
