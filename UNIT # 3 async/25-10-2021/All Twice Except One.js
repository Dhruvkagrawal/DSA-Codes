let count = 0;

function subset(arr, low, high, ans, k) {
  if (low <= high + 1 && ans.length != 0) {
    let temp = ans.trim().split(" ").map(Number);
    let c = 0;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] % 2 == 0) c++;
    }
    if (c >= k) {
      console.log(ans);
      count++;
    }
  }
  for (let i = low; i <= high; i++) {
    subset(arr, i + 1, high, ans + " " + arr[i], k);
  }
}

function runProgram(input) {
  let newInput = input.split("\n");
  let t = Number(newInput[0]);
  for (let i = 1; i < t * 2; i += 2) {
    let nk = newInput[i].trim().split(" ").map(Number);
    let k = nk[1];
    let arr = newInput[i + 1].trim().split(" ").map(Number);
    count = 0;
    subset(arr, 0, arr.length - 1, "", k);
    console.log(count);
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`1
	9 6
	1 2 3 4 5 6 7 8 9`);
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
