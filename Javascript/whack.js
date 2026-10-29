let score = 0;
let pos = 4;
let timeLeft = 30;
let timer;
let gametimer;
function showMole(){
    for(let i = 0; i < 9; i++){
        document.getElementById("b" + i).innerHTML = "-";
    }
    pos = Math.floor(Math.random() * 9);
    document.getElementById("b" + pos).innerHTML = "**";
}
function hit(number) {
    if (number == pos && run == true) {
        score = score + 1;
        document.getElementById("score").innerHTML = score;
        showMole();
    }
}
function startGame(){
    clearInterval(timer);
    clearInterval(gametimer);
    run = true;
    
    score = 0;
    timeLeft = 30;

    document.getElementById("score").innerHTML = score;
    document.getElementById("time").innerHTML = timeLeft;
    showMole();

    timer = setInterval(showMole, 800);

    gametimer = setInterval(function(){
        timeLeft = timeLeft - 1;
        document.getElementById("time").innerHTML = timeLeft;
        if(timeLeft == 0){
            clearInterval(timer);
            clearInterval(gametimer);

            for(let i = 0; i < 9; i++){
                document.getElementById("b" + i).innerHTML = "-";
            }
            run = false;
            alert("Game Over! Your Score is: " + score);
        }
    }, 1000);
}