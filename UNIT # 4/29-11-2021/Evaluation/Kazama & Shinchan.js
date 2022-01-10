// let a = [1, 3, 5, 6];
// let key = 2;
// function solve(a, key) {
//   start = 0;
//   end = a.length - 1;
//   while (start <= end) {
//     mid = Math.floor(start + (end - start) / 2);
//     if (a[mid] == key) {
//       return mid;
//     } else if (a[mid] < key) {
//       start = mid + 1;
//       // console.log(start);
//     } else {
//       return mid;
//     }
//   }
// }

function runProgram(input) {
  n = input.trim().split("\n");
  var a = n[1].trim().split(" ").map(Number);
  var key = +n[2];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === key) {
      console.log(i);
      return;
    } else if (a[i] > key) {
      console.log(i);
      return;
    } else if (a[i] < key && i === a.length - 1) {
      console.log(i);
      return;
    }
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`4
  1 3 5 9
  5 `);
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

// let a = [1, 3, 5, 6];
// let key = 2;
