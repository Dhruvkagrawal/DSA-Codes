// var a = [1, 2, 3];
// b = [];
// for (let i = 0; i < a.length; i++) {
//     for (let j = i; j < a.length; j++) {
//         arr = [];
//         for (let k = i; k <= j; k++) {
//             arr.push(a[k]);
//         }
//         count = 0;
//         for (let r = 0; r < arr.length; r++) {
//             if (arr[r] % 2 === 0) {
//                 count++;
//             }
//         }
//         if (count === arr.length) {
//             b.push(arr);
//         }
//     }
// }
// console.log(b.length);

function runProgram(input) {
    n = input.trim().split("\n");
    var a = n[1].trim().split(" ").map(Number);
    b = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            arr = [];
            for (let k = i; k <= j; k++) {
                arr.push(a[k]);
            }
            count = 0;
            for (let r = 0; r < arr.length; r++) {
                if (arr[r] % 2 === 0) {
                    count++;
                }
            }
            if (count === arr.length) {
                b.push(arr);
            }
        }
    }
    console.log(b.length);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`3
  1 2 3`);
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