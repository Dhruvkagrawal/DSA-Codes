var a = [1,2,3,5,7,12];
arr = []
for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
        sub = []
        var c = j-i
        if (i<j&&j-i==1||j-i==3||j-i==5||j-i==7||j-i==11) {
            sub.push(a[i],a[j]);
            arr.push(sub)
        }
    }
}
console.log(arr);
// function isprime(i,j) {
//     count = 2
//     for (let n = 1; n <= c; n++) {
//         if (c%n===0) {
//             count++
//         }
//     }
//     if (count>2) {
//         var d = (j-i)
//     }
//     return d;
// }
