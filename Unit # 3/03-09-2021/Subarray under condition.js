var a = [8, -9, 3, 5, -10, -4, -1, 8, 7, -1];
// // for (let i = 0; i < a.length; i++) {
// //     arr = [];
// //     for (let j = i; j < a.length; j++) {
// //         arr.push(a[j]);
// //         // console.log(arr);
// //         sum = 0;
// //         for (let r = 0; r < arr.length; r++) {
// //             sum = sum + arr[r];
// //             // console.log(sum);
// //         }
// //         if (sum === 0) {
// //             console.log(a.indexOf(arr[0]) + " " + a.indexOf(arr[arr.length - 1]));
// //         }
// //     }
// // }
// // function getSubArray1(input) {
// //     let sum = 0,
// //         map = { 0: [-1] };

// //     for (let i = 0; i < input.length; i++) {
// //         sum += input[i];

// //         if (!map[sum]) {
// //             map[sum] = [i];
// //         } else {
// //             map[sum].push(i);

// //             let val = map[sum];
// //             for (let j = 0; j < val.length; j++) {
// //                 console.log(val[j]);
// //             }
// //         }
// //     }
// // }
// // getSubArray1(a);

// function runProgram(input) {
//     a = input.trim().split(" ").map(Number);
//     for (let i = 0; i < a.length; i++) {
//         arr = [];
//         for (let j = i; j < a.length; j++) {
//             arr.push(a[j]);
//             // console.log(arr);
//             sum = 0;
//             for (let r = 0; r < arr.length; r++) {
//                 sum = sum + arr[r];
//                 // console.log(sum);
//             }
//             if (sum === 0) {
//                 console.log(a.indexOf(arr[0]) + " " + a.indexOf(arr[arr.length - 1]));
//             }
//         }
//     }
// }

// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//     runProgram(`8 -9 3 5 -10 -4 -1 8 7 -1`);
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function(input) {
//         read += input;
//     });
//     process.stdin.on("end", function() {
//         read = read.replace(/\n$/, "");
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//     });
//     process.on("SIGINT", function() {
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//         process.exit(0);
//     });
// }
function FindSubArray(a, n) {
  let i = 0;
  j = i;
  sum = 0;
  while (i < a.length - 1 && j < a.length) {
    if (sum === 0) {
      console.log(i + " " + j);
    } else if (j < a.length - 1) {
      j++;
    } else {
      i++;
      j = i;
    }
    sum = 0;
  }
}
FindSubArray(a);
