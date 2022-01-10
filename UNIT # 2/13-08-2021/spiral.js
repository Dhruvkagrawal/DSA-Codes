function runProgram(input) {
  var arr = input.split("\n");
  var l = +arr[0];
  var a = [];
  for (let i = 1; i < arr.length - 1; i++) {
    a.push(arr[i].trim().split(" ").map(Number));
  }
  t = Math.ceil(a.length / 2);
  count = a.length * a[0].length;
  arr = [];
  top = 0;
  bottom = a.length - 1;
  left = 0;
  right = a[0].length - 1;
  for (let k = 0; k < t; k++) {
    for (let i = left; i <= right; i++) {
      if (arr.length < count) {
        arr.push(a[top][i]);
      }
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      if (arr.length < count) {
        arr.push(a[i][right]);
      }
    }
    right--;
    for (let i = right; i >= left; i--) {
      if (arr.length < count) {
        arr.push(a[bottom][i]);
      }
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      if (arr.length < count) {
        arr.push(a[i][left]);
      }
    }
    left++;
  }
  console.log(arr.join(" "));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8
  `);
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
