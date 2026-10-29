let c = 0;
function number(){
    let val = document.getElementById("val").value;
    let para = document.createElement("p");
    if (c>=7){
        para.textContent= "No Chances left";
    }
    else if (val.trim() == ""){
        para.textContent= "Enter a value";
    }
    else if (val<1 || val>10) {
        c++;
        para.textContent= `${val} is a wrong guess. You have ${7-c} chances left`;
    }
    else {
        para.textContent= `${val} is a correct guess`;
    }
    document.body.append(para);
}

