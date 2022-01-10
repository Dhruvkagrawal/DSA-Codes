// var a = [2, 4, 1, 5, 6, 9, 4, 8];
// var sum = 11;
// ans = [];
// for (let i = 0; i < a.length; i++) {
//     arr = [];
//     for (let j = i; j < a.length; j++) {
//         arr.push(a[j]);
//         console.log(arr);
//         sum1 = 0;
//         for (let r = 0; r < arr.length; r++) {
//             sum1 += arr[r];
//         }
//         console.log(sum1);
//         if (sum1 === sum) {
//             ans.push(arr);
//         }
//     }
// }
// console.log(ans.length);

function runProgram(input) {
    n = input.trim().split("\n");
    ls = n[0].trim().split(" ").map(Number);
    sum = +ls[1];
    a = n[1].trim().split(" ").map(Number);
    count = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] + a[j] === sum) {
                count++;
            }
        }
    }
    console.log(count);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`8 11
    2 4 1 5 6 9 4 8`);
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

// var a = [3, 0, 6, 2, 7];
// var sum = 9;
// count = 0;
// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[i] + a[j] === sum) {
//             count++;
//         }
//     }
// }
// console.log(count);