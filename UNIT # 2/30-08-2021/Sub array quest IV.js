// var a = [1, 2, 3, 4, 5];
// b = [];
// for (let i = 0; i < a.length; i++) {
//     for (let j = i; j < a.length; j++) {
//         arr = [];
//         for (let k = i; k <= j; k++) {
//             arr.push(a[k]);
//         }
//         if (arr[0] % 2 !== 0 && arr[arr.length - 1] % 2 === 0) {
//             b.push(arr);
//         }
//     }
// }
// console.log(b.length);

function runProgram(input) {
    n = input.trim().split("\n");
    var t = +n[0];
    line = 1;
    for (let i = 0; i < t; i++) {
        var l = +n[line++];
        var a = n[line++].trim().split(" ").map(Number);
        b = [];
        for (let i = 0; i < a.length; i++) {
            for (let j = i; j < a.length; j++) {
                arr = [];
                for (let k = i; k <= j; k++) {
                    arr.push(a[k]);
                }
                if (arr[0] % 2 !== 0 && arr[arr.length - 1] % 2 === 0) {
                    b.push(arr);
                }
            }
        }
        console.log(b.length);
    }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`2
  5
  1 2 3 4 5
  5
  1 2 3 4 5`);
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