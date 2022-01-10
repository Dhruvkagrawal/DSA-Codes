// var a = [[1, 4], [2, 3], [1, 2], [3], [4], [5], [4]];
// var stack = [];
// var queue = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i][0] === 1) {
//     queue.push(a[i][1]);
//   } else if (a[i][0] === 2) {
//     stack.push(a[i][1]);
//   } else if (a[i][0] === 3) {
//     if (queue.length !== 0) {
//       console.log(queue[0]);
//     } else {
//       console.log("-1");
//     }
//   } else if (a[i][0] === 4) {
//     if (stack.length !== 0) {
//       console.log(stack[stack.length - 1]);
//     } else {
//       console.log("-1");
//     }
//   } else if (a[i][0] === 5) {
//     stack.push(queue[0]);
//     queue.shift();
//   }
// }
// console.log(stack);
// console.log(queue);

// function runProgram(input) {
//   n = input.trim().split("\n");
//   t = +n[0];
//   a = [];
//   line = 1;
//   for (let i = 0; i < t; i++) {
//     a1 = n[line++].trim().split(" ").map(Number);
//     a.push(a1);
//   }
//   var stack = [];
//   var queue = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i][0] === 1) {
//       queue.push(a[i][1]);
//     } else if (a[i][0] === 2) {
//       stack.push(a[i][1]);
//     } else if (a[i][0] === 3) {
//       console.log(queue[0]);
//     } else if (a[i][0] === 4) {
//       console.log(stack[stack.length - 1]);
//     } else if (a[i][0] === 5) {
//       stack.push(queue[0]);
//       queue.shift();
//     }
//   }
// }
// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`7
//   1 4
//   2 3
//   1 2
//   3
//   4
//   5
//   4`);
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

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  a = [];
  line = 1;
  for (let i = 0; i < t; i++) {
    a1 = n[line++].trim().split(" ").map(Number);
    a.push(a1);
  }
  var stack = [];
  var queue = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] === 1) {
      queue.push(a[i][1]);
    } else if (a[i][0] === 2) {
      stack.push(a[i][1]);
    } else if (a[i][0] === 3) {
      if (queue.length !== 0) {
        console.log(queue[0]);
      } else {
        console.log("-1");
      }
    } else if (a[i][0] === 4) {
      if (stack.length !== 0) {
        console.log(stack[stack.length - 1]);
      } else {
        console.log("-1");
      }
    } else if (a[i][0] === 5) {
      stack.push(queue[0]);
      queue.shift();
    }
  }
}
if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`7
  1 4
  2 3
  1 2
  3
  4
  5
  4`);
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
