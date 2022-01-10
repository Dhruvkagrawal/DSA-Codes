// // var a = [3,7,6]
// var high = a[0];
// for (let i = 0;i < a.length;i++) {
//     if (high<a[i]) {
//         high = a[i]
//     }if (high>a[i]) {
//         console.log(a[i]);
//     }
// }
function runProgram(input) {
a = input.trim().split(" ").map(Number);
var high = a[0];
arr = []
for (let i = 0;i < a.length;i++) {
    if (high<a[i]) {
        high = a[i]
    }
}
for (let j = 0; j < a.length; j++) {
    if (high>a[j]) {
        arr.push(a[j])
    }
}
high2 = arr[0]
for (let k = 0;k < arr.length;k++) {
    if (high2<arr[k]) {
        high2 = arr[k]
    }
}
console.log(high2);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3 7 5 6 8`);
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