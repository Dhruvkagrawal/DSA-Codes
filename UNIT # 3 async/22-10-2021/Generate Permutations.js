let str = [1, 2, 3];
let n = str.length;
arr = [];
ans = permute(str, 0, n - 1, arr);
console.log(ans);
function permute(str, l, r) {
  if (l == r) {
    arr.push(str.join(" "));
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, i, l);
      permute(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
  return arr.sort();
}

function swap(a, i, j) {
  //   [a[i], a[j]] = [a[j], a[i]];
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
  return a;
}

// function runProgram(input) {
//   k = input.trim().split("\n");
//   l = +k[0];
//   str = k[1].trim().split(" ").map(Number);
//   let n = str.length;
//   permute(str, 0, n - 1);
// }

// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`3
//   1 2 3`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

// var a = "abcdefghijk";
// arr = a.split("");
// var N = arr.length;
// var output = "";
// for (var i = 0; i <= N; i = i + 2) {
//   var temp = arr[i];
//   arr[i] = arr[i + 1];
//   arr[i + 1] = temp;
//   output = output + arr[i] + " " + arr[i + 1] + " ";
// }
// console.log(output);
