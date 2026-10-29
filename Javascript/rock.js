let c = 0;
let p1 = 0;
let p2 = 0;
function play(){
    let val1 = document.getElementById("val1").value;
    let val2 = document.getElementById("val2").value;
    let para = document.createElement("p");
    if (c>=7){
        para.textContent= `No Chances left. Player 1 Score: ${p1} Player 2 Score: ${p2}`;
    }
    else if (val1 == val2){
        c++;
        para.textContent= "Tie";
    }
    else if (val1.toLowerCase() == "rock") {
        c++;
        if(val2.toLowerCase() == "scissor"){
            p1++;
            para.textContent= `Player 1 is the winner`;
        }
        else if(val2.toLowerCase() == "paper"){
            p2++;
            para.textContent= `Player 2 is the winner`;
        }
    }
    else if (val1.toLowerCase() == "paper") {
        c++;
        if(val2.toLowerCase() == "scissor"){
            p1++;
            para.textContent= `Player 2 is the winner`;
        }
        else if(val2.toLowerCase() == "rock"){
            p2++;
            para.textContent= `Player 1 is the winner`;
        }
    }
    else if (val1.toLowerCase() == "scissor") {
        c++;
        if(val2.toLowerCase() == "rock"){
            p1++;
            para.textContent= `Player 2 is the winner`;
        }
        else if(val2.toLowerCase() == "paper"){
            p2++;
            para.textContent= `Player 1 is the winner`;
        }
    }
    else{
        
        para.textContent = "Invalid Input";
    }
    document.body.append(para);
}

