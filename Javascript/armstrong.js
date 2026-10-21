function isArmstrong(a) {
    let b = a;
    // let c = 0;
    // while(a>0){
    //     a=Math.floor(a/10);
    //     c = c+1;
    // }.
    let c = a.toString().length;
    let sum = 0;
    while (a > 0) {
        let temp = a % 10;
        sum = sum + temp ** c;
        a = Math.floor(a / 10);
    }
    if (sum == b) {
        return true;
    }
    else {
        return false;
    }
}
function checkAndShow() {
    let val = document.getElementById("val").value;
    let para = document.createElement("p");
    if (isArmstrong(val)) {
        para.textContent= `${val} is an Armstrong number`;
    }
    else {
        para.textContent= `${val} is not an Armstrong number`;
    }
    document.getElementsByTagName("body")[0].append(para);
}