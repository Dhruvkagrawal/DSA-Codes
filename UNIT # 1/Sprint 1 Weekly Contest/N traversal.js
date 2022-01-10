// var a = [
//     [1,2,3],
//     [1,2,4],
//     [7,8,9]
// ]
// arr = [];
// for (let i = 0; i < a.length; i++) {
//     for (let j = a.length-1; j >=0; j--) {
//         if (i===0||i === a.length-1&&i!==j) {
//            arr.push(a[j][i]);
//         }else if (i===j) {
//             arr.push(a[j][i]);
//         }
//     }
// }
// console.log(arr.join(" "));


function runProgram(input) {
n = input.trim().split("\n");
var t = +n[0];
line = 1;
for (let k = 1; k <= t; k++) {
    var len = +n[line++];
    a = []
    for (let r = 1; r <= len; r++) {
        var sub = n[line].trim().split(" ").map(Number)
        line++
        a.push(sub)
    }
    arr = [];
for (let i = 0; i < a.length; i++) {
    for (let j = a.length-1; j >=0; j--) {
        if (i===0||i === a.length-1&&i!==j) {
        arr.push(a[j][i]);
        }else if (i===j) {
            arr.push(a[j][i]);
        }
    }
}
console.log(arr.join(" "));
}
}
if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2
  3
  1 2 3
  4 5 6
  7 8 9
  4
  1 2 4 5
  4 5 6 6
  7 8 9 7
  7 8 9 8`);
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