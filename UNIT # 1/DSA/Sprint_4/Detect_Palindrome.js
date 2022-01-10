var a = "1221";
reverse = "";
for (var i = a.length-1; i >=0; i--) {
    reverse = reverse + a[i]
    // console.log(reverse);
}
console.log(reverse);
if (reverse === a) {
    console.log("Yes");
}else{
    console.log("No");
}