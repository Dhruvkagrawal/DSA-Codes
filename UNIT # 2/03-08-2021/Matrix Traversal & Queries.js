// var a = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [8,9,7]
// ]
// q = 2
// if (q == 1) {
//     arr = []
//     for (let i = 0; i < a.length; i++) {
//         if (i % 2 === 0) {
//             for (let j = 0; j < a[i].length; j++) {
//                 arr.push(a[i][j])
//             }
//         } else if (i % 2 !== 0) {
//             for (let j = a[i].length-1; j >= 0; j--) {
//                 arr.push(a[i][j])
//             }
//         }
//     }
//     ans = arr.join(" ")
//     console.log(ans);
// }
// if (q == 2) {
//     arr = []
//     for (let i = 0; i < a.length; i++) {
//         if (i % 2 === 0) {
//             for (let j = a[i].length - 1; j >= 0; j--) {
//                 arr.push(a[i][j])
//             }
//         } else if (i % 2 !== 0) {
//             for (let j = 0; j < a[i].length; j++) {
//                 arr.push(a[i][j])
//             }
//         }
//     }
//     ans = arr.join(" ")
//     console.log(ans);
// }

function runProgram(input) {
    n = input.trim().split("\n");
    var t = +n[0];
    for (let k = 0; k < n.length; k++) {
        n[k] = n[k].trim().split(" ").map(Number)
    }
    n = n.slice(1);
    for (let l = 0; l < t; l++) {
        a = n.splice(0, n[0][0] + 1)
        var q = a[0][2]
        a = a.slice(1);
        // console.log(a.length);
        // console.log(a[0].length);
        if (q == 1) {
            arr = []
            for (let i = 0; i < a.length; i++) {
                if (i % 2 === 0) {
                    for (let j = 0; j < a[i].length; j++) {
                        arr.push(a[i][j])
                    }
                } else if (i % 2 !== 0) {
                    for (let j = a[i].length - 1; j >= 0; j--) {
                        arr.push(a[i][j])
                    }
                }
            }
            ans = arr.join(" ").trim()
            console.log(ans);
        }
        else if (q == 2) {
            arr = []
            for (let i = 0; i < a.length; i++) {
                if (i % 2 === 0) {
                    for (let j = a[i].length - 1; j >= 0; j--) {
                        arr.push(a[i][j])
                    }
                } else if (i % 2 !== 0) {
                    for (let j = 0; j < a[i].length; j++) {
                        arr.push(a[i][j])
                    }
                }
            }
            ans = arr.join(" ").trim()
            console.log(ans);
        }
    }

}
if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`1
    8 7 2
    80 64 90 11 7 1 84
    86 79 78 72 95 49 26
    76 75 26 75 28 15 21
    97 93 47 17 9 80 2
    97 12 1 79 84 22 16
    11 70 37 20 56 93 55
    1 87 15 63 73 89 96
    62 44 99 46 22 24 58 `);
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