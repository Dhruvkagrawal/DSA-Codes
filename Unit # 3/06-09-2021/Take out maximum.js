function runProgram(input) {
  n = input.trim().split("\n");
  nk = n[0].trim().split(" ").map(Number);
  var k = nk[1];
  var a = n[1].trim().split(" ").map(Number);
  high = 0;
  ans = [];
  for (let i = 0; i < a.length; i++) {
    arr = [];
    for (let j = i; j < a.length; j++) {
      arr.push(a[j]);
      if (arr.length === k) {
        sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum = sum + arr[i];
        }
        if (high < sum) {
          high = sum;
        }
      }
    }
  }
  console.log(high);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`100 5
  56 96 57 87 65 82 2 74 60 81 66 84 89 28 78 62 100 58 96 29 41 43 92 37 38 38 58 81 64 -8 9 13 16 16 54 37 32 5 84 -1 30 91 24 31 85 71 13 3 56 49 91 74 28 8 85 81 78 13 69 89 72 33 99 14 71 84 26 89 3 70 33 75 88 93 12 96 35 15 6 25 74 -4 11 68 73 59 41 16 26 42 84 81 34 50 8 -4 16 20 71 23`);
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

// function part1(a) {
//   i = 0;
//   j = a.length - 1;
//   arr = [];
//   while (i < j) {
//     sum = 0;
//     sum = sum + a[i] + a[j];
//     arr.push(sum);
//     i++;
//   }
//   return arr;
// }

// function part2(a, arr) {
//   high = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum = 0;
//     for (let j = 0; j < arr.length; j++) {
//       sum = a[i] + arr[j];
//     }
//     if (high < sum) {
//       high = sum;
//     }
//   }
//   return high;
// }

// var a = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];
// var k = 3;
// high = 0;
// ans = [];
// for (let i = 0; i < a.length; i++) {
//   arr = [];
//   for (let j = i; j < a.length; j++) {
//     arr.push(a[j]);
//     if (arr.length === k) {
//       sum = 0;
//       for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//       }
//       if (high < sum) {
//         high = sum;
//       }
//     }
//   }
// }
// console.log(high);
