var a = 13;
count = 0;
for (var i = 2; i < a; i++) {
    if (a%2 === 0) {
        count++
    }
}
if (count>0) {
    console.log("No");
}else{
    console.log("Yes");
}