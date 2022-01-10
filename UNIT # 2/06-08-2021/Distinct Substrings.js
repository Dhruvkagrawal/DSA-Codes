// count = 0;
// arr = []
// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j <= a.length; j++) {
//         str = "";
//         for (let k = i; k < j; k++) {
//             str = str + a[k]
//         }
//         ans = str.split(" ");
//         arr.push(ans)
//     }
// }
// for (let m = 0; m < arr.length; m++) {
//     if (arr[m].length == 1) {
//         count++
//     }
// }
// console.log(count);

function runProgram(input) {
    n = input.trim().split("\n");
    var t = +n[0];
    line = 1
    for (let r = 0; r < t; r++) {
        var len = +n[line];
        line++;
        var a = n[line];
        line++;
        count = 0;
        arr = []
        for (let i = 0; i < a.length; i++) {
            for (let j = i + 1; j <= a.length; j++) {
                str = "";
                for (let k = i; k < j; k++) {
                    str = str + a[k]
                }
                ans = str.split(" ");
                arr.push(ans)
            }
        }
        for (let m = 0; m < arr.length; m++) {
            if (arr[m].length == 1) {
                count++
            }
        }
        console.log(count);
    }

}
if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`2
  5
  abcde
  3
  aaa`);
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


var a = "aaa"
count = 0;
arr = []
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j <= a.length; j++) {
        str = "";
        for (let k = i; k < j; k++) {
            str = str + a[k]
        }
        arr.push(str)
for (let m = 0; m < arr.length; m++) {
    if (str == arr[m]) {
        count++
    }
}
if (count==0) {
    arr.push(str)
}
    }
}
console.log(arr.length);

// var a = "abcde";
// str = "";
// count = 1;
// for (let i = 0; i < array.length; i++) {
//     if (str[i]==str[i+1]) {
//         count++
//     }else{

//     }
// }
