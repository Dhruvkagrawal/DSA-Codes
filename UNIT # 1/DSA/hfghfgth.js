// var a = [["aa1234"], ["abcd12"]];
// for (let i = 0; i < a.length; i++) {
//     if (a[i]=="1"||a[i]=="2"||a[i]=="3"||a[i]=="4"||a[i]=="5"||a[i]=="6"||a[i]=="7"||a[i]=="8"||a[i]=="9"||a[i]=="0") {
//         count--
//     }
// }
// console.log(count);

// var a = "Masai"
// str = " ";
// for (let i = 0; i < a.length; i++) {
//     switch (a[i]) {
//         case "M":
//             str = str + "m"
//             break;
//     }
// }
// console.log(str);


// var a = [1, 10, 1]
// var l = a[0]
// var r = a[1]
// var k = a[2]
// if (l % k == 0 || r % k == 0) {
//     console.log((l / k) + (r / k) - 1);
// } else {
//     console.log((l / k) + (r / k))
// }

// var a =[1,2,3,4,5];
// var ans = [];
// for (var i = 0; i < a.length; i++) {
//      if (i%2==0) {
//          ans.push(a[i])
//      }
// }
// console.log(ans);

// var a = 'ATTCGGGA';
// countA = 0;
// countC = 0;
// countG = 0;
// countT = 0;
// var arr = []
// for (var i = 0; i < a.length; i++) {
//     if (a[i] == "A") {
//         countA++
//     } else if (a[i] == 'C') {
//         countC++
//     } else if (a[i] == "G") {
//         countG++
//     } else {
//         countT++
//     }
// }
// arr.push(countA, countC, countT, countG)
// message = arr[0]
// for (var j = 0; j < arr.length; j++) {
//     if (arr[0] < arr[j]) {
//         message = arr[j]
//     }
// }
// console.log(message);

var a = "abba";
var b = "abba";
var c = (a + b)
var d = ""
for (let i = c.length - 1; i >= 0; i--) {
    d = d + c[i]
}
if (c == d) {
    console.log("Yes");
} else {
    console.log("No");
}

var a = [1,2,3,4,5];
var a = a.tostring()
console.log(a);
for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
        for (let k = i; k <= j; k++) {
            arr.push(a[k])
        }
    }
}
console.log(arr);