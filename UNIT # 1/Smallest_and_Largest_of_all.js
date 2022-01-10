// var a = [46, 2, 4, 5, 9, 2, -2, 12, 45, -9, 0];
// var largest = a[0];
// var smallest = a[0]
// for (var i = 0; i < a.length; i++) {
//     if (a[0] < a[i]) {
//         largest = a[i];
//     }else if(smallest>a[i]){
//           smallest = a[i]
//     }
// }
// console.log(largest);
// console.log(smallest);

function runProgram(input) {
    var a = input.split("\n");
    var b = a[1].split(" ").map(Number)
    var largest = a[0];
    var smallest = a[0]
    for (var i = 0; i < b; i++) {
        if (a[0] < a[i]) {
            largest = a[i];
        } else if (smallest > a[i]) {
            smallest = a[i]
        }
    }
    console.log(largest);
    console.log(smallest);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});