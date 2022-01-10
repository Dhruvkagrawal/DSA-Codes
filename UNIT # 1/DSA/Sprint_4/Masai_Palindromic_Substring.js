var s = 'thisracecarisgood';
for (var i = 0; i < s.length; i++) {
    str = " "
    for (var j = 5; j < s.length; j++) {
        str = str + s[j];
        console.log(str);
    }
    console.log(str);
}