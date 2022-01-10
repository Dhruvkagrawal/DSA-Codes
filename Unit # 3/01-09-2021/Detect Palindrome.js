var a = 1221;
// var a = a.toString().split("").map(Number);

// function ispalin(arr) {
//     left = 0;
//     right = a.length - 1;
//     while (left < right) {
//         if (a[left] !== a[right]) {
//             return "No";
//         } else {
//             left++;
//             right--;
//         }
//     }
//     return "Yes";
// }
// console.log(ispalin(a));

function runProgram(input) {
    var a = Number(input);
    var a = a.toString().split("").map(Number);

    function ispalin(a) {
        left = 0;
        right = a.length - 1;
        while (left < right) {
            if (a[left] !== a[right]) {
                return "No";
            } else {
                left++;
                right--;
            }
        }
        return "Yes";
    }
    console.log(ispalin(a));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function(input) {
    read += input;
});
process.stdin.on("end", function() {
    read = read.replace(/\n$/, "");
    runProgram(read);
});

process.on("SIGINT", function() {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});