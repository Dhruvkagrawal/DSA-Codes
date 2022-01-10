// var a = [1, 2, 3, 4, 5];
// k = 8;
// count = 0;
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (Math.abs(a[i] - a[j]) === k) {
//       count++;
//     }
//   }
// }
// if (count !== 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    lk = n[line++].trim().split(" ").map(Number);
    k = +lk[1];
    a = n[line++].trim().split(" ").map(Number);
    l = 0;
    r = 1;
    count = 0;
    while (l < a.length && r < a.length) {
      if (Math.abs(a[l] - a[r]) === k) {
        count++;
        l++;
        r++;
      } else if (Math.abs(a[l] - a[r]) < k) {
        r++;
      } else {
        l++;
      }
    }
    if (count === 0) {
      console.log("No");
    } else {
      console.log("Yes");
    }
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2
  5 3
  1 2 3 4 5
  5 8
  1 2 3 4 5 `);
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

// l = 0;
// r = 1;
// count = 0;
// while (l < a.length && r < a.length) {
//   if (Math.abs(a[l] - a[r]) === k) {
//     count++;
//     l++;
//     r++;
//   } else if (Math.abs(a[l] - a[r]) < k) {
//     r++;
//   } else {
//     l++;
//   }
// }
// if (count === 0) {
//   console.log("No");
// } else {
//   console.log("Yes");
// }
