var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
var n = Math.floor(a.length / 2);
var count = a.length * a[0].length;
arr = [];
top = 0;
bottom = a.length - 1;
left = 0;
right = a[0].length - 1;
for (let k = 0; k <= n; k++) {
  for (let i = top; i <= bottom; i++) {
    if (count > arr.length) {
      arr.push(a[i][top]);
    }
  }
  top++;
  for (let i = top; i <= right; i++) {
    if (count >= arr.length) {
      arr.push(a[bottom][i]);
    }
  }
  bottom--;
  for (let i = bottom; i >= left; i--) {
    if (count >= arr.length) {
      arr.push(a[i][right]);
    }
  }
  right--;
  for (let i = right; i >= top; i--) {
    if (count >= arr.length) {
      arr.push(a[left][i]);
    }
  }
  left++;
}
console.log(arr.join(" "));

// function runProgram(input) {
//   n = input.trim().split("\n");
//   var t = +n[0];
//   line = 1;
//   for (let i = 0; i < t; i++) {
//     rc = n[line].trim().split(" ");
//     var r = +rc[0];
//     var c = +rc[1];
//     line++;
//     a = [];
//     for (let j = 0; j < r; j++) {
//       arr = n[line].trim().split(" ").map(Number);
//       a.push(arr);
//       line++;
//     }
//     var n = Math.floor(a.length / 2);
//     var count = a.length * a[0].length;
//     arr = [];
//     top = 0;
//     bottom = a.length - 1;
//     left = 0;
//     right = a[0].length - 1;
//     for (let k = 0; k <= n; k++) {
//       for (let i = top; i <= bottom; i++) {
//         if (count > arr.length) {
//           arr.push(a[i][top]);
//         }
//       }
//       top++;
//       for (let i = top; i <= right; i++) {
//         if (count >= arr.length) {
//           arr.push(a[bottom][i]);
//         }
//       }
//       bottom--;
//       for (let i = bottom; i >= left; i--) {
//         if (count >= arr.length) {
//           arr.push(a[i][right]);
//         }
//       }
//       right--;
//       for (let i = right; i >= top; i--) {
//         if (count >= arr.length) {
//           arr.push(a[left][i]);
//         }
//       }
//       left++;
//     }
//     console.log(arr.join(" "));
//   }
// }

// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`2
//   3 4
//   1 2 3 4
//   5 6 7 8
//   9 10 11 12
//   4 3
//   1 2 3
//   4 5 6
//   7 8 9
//   10 11 12`);
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
