
// var small = a[0];
// var large = a[0];
// for (var i = 0; i < a.length; i++) {
//     if (small>a[i]) {
//         small = a[i]
//     }else if (large<a[i]) {
//         large = a[i]
//     }
// }
// console.log(small);
// console.log(large);


function find(a) {
    var small = a[0];
    var large = a[0];
    for (var i = 0; i < a.length; i++) {
        if (small > a[i]) {
            small = a[i]
        } else if (large < a[i]) {
            large = a[i]
        }
    }
    console.log(small);
    console.log(large);
}


function runProgram(input) {
    n = input.trim().split("\n")
    var a = n[1].trim().split(" ").map(Number);
    find(a)
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`4
  -2 0 8 4`);
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