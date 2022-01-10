var a = [2, 3, 4, 6];
var t = 3;

// function getmax(arr, t) {
//     let wsum = 0;
//     let msum = 0;
//     for (let i = 0; i < t; i++) {
//         wsum += arr[i];
//     }
//     for (let j = t; j < arr.length; j++) {
//         wsum += arr[j] - arr[j - t];
//         msum = Math.max(msum, wsum);
//     }

// }
// console.log(getmax(a, t));

function runProgram(input) {
    n = input.trim().split("\n");
    ls = n[0].trim().split(" ").map(Number);
    t = +ls[1];
    a = n[1].trim().split(" ").map(Number);
    ans = [];
    for (let i = 0; i < a.length; i++) {
        arr = [];
        for (let j = i + 1; j < a.length; j++) {
            arr.push(a[j]);
            sum1 = 0;
            for (let r = 0; r < arr.length; r++) {
                sum1 += arr[r];
            }
            if (sum1 % t !== 0) {
                ans.push(arr);
            }
        }
    }
    ans1 = [];
    for (let i = 0; i < ans.length; i++) {
        if (ans[i].length === t) {
            ans1.push(ans);
        }
    }
    console.log(ans1.length);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`4 3
  2 3 4 6`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}