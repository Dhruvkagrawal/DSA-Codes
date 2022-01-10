// var a = [4, 2, 3, 3, 2];
// a = a.sort();
// arr = [];
// for (let i = 0; i < a.length; i++) {
//   if (arr[i] === a[i + 1]) {
//     arr.push(a[i]);
//   }
// }
// console.log(arr.join(" "));

var singleNumber = function (nums) {
  const map = new Map();
  //   console.log(map);
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
    } else {
      map.set(nums[i]);
    }
    console.log(Object.keys(map));
  }
};

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    l = +n[line++];
    a = n[line++].trim().split(" ").map(Number);
    singleNumber(a);
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2
  1
  5
  5
  1 2 1 3 2`);
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
