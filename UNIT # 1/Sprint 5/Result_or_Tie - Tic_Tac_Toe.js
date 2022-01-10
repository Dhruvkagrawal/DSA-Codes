var a = [
    ['x', 'o', 'x'],
    ['o', 'x', 'x'],
    ['o', 'o', 'o']
]
for (let i = 0; i < a.length; i++) {
    sub = []
    for (let j = 0; j < a[i].length; j++) {
        sub.push(a[i][j]);
    }
    for (let k = 0; k < sub[i].length; k++) {
        sum  = 0;
        console.log(sub[1]);
        if (a[i]=="x") {
            sum = sum +1
        }if(sum==3){
            console.log("x");
        }else{
            console.log("o");
        }
    }
} 