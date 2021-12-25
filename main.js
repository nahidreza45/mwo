

const mathBox = document.getElementById('math-box');   
const optionOnePage = document.getElementById("option-1");
const optionTwoPage = document.getElementById("option-2");
const optionThreePage = document.getElementById("option-3");
const scorePage = document.getElementById('score-box');
const timerPage = document.getElementById('time-box');
const lostMsg = document.getElementById('lost-msg');
const ExtraMsg = document.getElementById('xtra-msg');
const play_again = document.getElementById('play-again-links');
const highScoreShow = document.getElementById('hss');
const nameBlock = document.getElementById('name-part');
const mainPage = document.getElementById('main-pg');
const gamePage = document.getElementById('game-pg');

let store = window.localStorage;
if ((store.getItem("highScore")) == null) {
    store.setItem("highScore","0");
    store.setItem("name","You");
}

let score=0;
let correctAnswer= null;

function start() {
    let AnsMath = null;
    let QsnMath =null;
    optionOnePage.style.background = "#512275";
    optionTwoPage.style.background = "#512275";
    optionThreePage.style.background = "#512275";
    
    function randomNumber(x) {
        return Math.floor((Math.random() * x) + 1);
    }
    
    let number1 = randomNumber(10);
    let number2 = randomNumber(10);
    let number3 = randomNumber(10);
    let number1_100 = randomNumber(100);
    let number2_100 = randomNumber(100);
    let number3_100 = randomNumber(100);
    
    let x = null;
    let x_ans = null;
    
    let randomNumberForOporator = randomNumber(5);
    
    if (score<20) {
        if (randomNumberForOporator===1) {
            QsnMath = number1+"+"+number2;
            AnsMath = number1 + number2;
        }else if (randomNumberForOporator===2){
            QsnMath = number1+"-"+number2;
            AnsMath = number1 - number2;
        }else if (randomNumberForOporator===3){
            QsnMath = number1+"×"+number2;
            AnsMath = number1 * number2;
        }else if (randomNumberForOporator===4){
            let extra_num = number1*number2;
            QsnMath = extra_num+"÷"+number2;
            AnsMath = extra_num / number2;
        }else{
            x = number1;
            x_ans = x+number3;
            QsnMath = "??"+"+"+number3 +"=" + x_ans;
            AnsMath = x;
        }
    }else if (score<35){
        if (randomNumberForOporator===1) {
            QsnMath = number1+"+"+number2+"+"+number3;
            AnsMath = number1 + number2 + number3;
        }else if (randomNumberForOporator===2){
            QsnMath = number1+"-"+number2+"-"+number3;
            AnsMath = number1 - number2- number3;
        }else if (randomNumberForOporator===3){
            QsnMath = number1+"×"+number2+"×"+number3;
            AnsMath = number1 * number2 * number3;
        }else if (randomNumberForOporator===4){
            QsnMath = number1+"²"+"+"+number2;
            AnsMath = (number1**2)+number2;
        }else{
            x = number2_100;
            x_ans = x+number3_100;
            QsnMath = "??"+"+"+number3_100 +"=" + x_ans;
            AnsMath = x;
        }    
    }else if (score<50){
        if (randomNumberForOporator===1) {
            QsnMath = number1_100+"+"+number2_100+"+"+number3_100;
            AnsMath = number1_100 + number2_100 + number3_100;
        }else if (randomNumberForOporator===2){
            QsnMath = number1_100+"-"+number2_100+"+"+number3_100;
            AnsMath = number1_100 - number2_100 + number3_100;
        }else if (randomNumberForOporator===3){
            QsnMath = number1_100+"×"+number2;
            AnsMath = number1_100 * number2;
        }else if (randomNumberForOporator===4){
            QsnMath = number3+"³"+"-"+number2;
            AnsMath = (number3**3)-number2;
        }else{
            x = number3;
            x_ans = x*number2;
            QsnMath = number2+"??"+"=" + x_ans;
            AnsMath = x;
        }
    }else if (score<70){
        if (randomNumberForOporator===1) {
            QsnMath = number1_100+"+"+number2+"×"+number3;
            AnsMath = number1_100 + number2 * number3;
        }else if (randomNumberForOporator===2){
            QsnMath = number1+"²"+"+"+number2+"°"+"+"+number3+"³";
            AnsMath = (number1**2) + (number2**0) + (number3**3);
        }else if (randomNumberForOporator===3){
            let extra_num2=number1_100*number3*number2;
            QsnMath = extra_num2+"÷"+number2;
            AnsMath = extra_num2 / number2;
        }else if (randomNumberForOporator===4){
            let extra_num3=number3**2;
            QsnMath = "√"+extra_num3+"+"+number2;
            AnsMath = (extra_num3**(1/2))+number2;
        }else{
            x = number2_100;
            x_ans = number3_100-x;
            QsnMath = number3_100 + "-" + "??" + "=" + x_ans ;
            AnsMath = x;
        }
    }else{
        if (randomNumberForOporator===1) {
            QsnMath = number1_100+"-"+number2_100+"×"+number3;
            AnsMath = number1_100 - number2_100 * number3;
        }else if (randomNumberForOporator===2){
            QsnMath = number1+"²"+"+"+number2+"²"+"+"+number3+"²";
            AnsMath = (number1**2) + (number2**2) + (number3**2);
        }else if (randomNumberForOporator===3){
            let extra_num4=number1_100*number3*number2;
            QsnMath = extra_num4+"÷"+number2+"+"+number3_100;
            AnsMath = extra_num4 / number2+number3_100;
        }else if (randomNumberForOporator===4){
            let extra_num5=number1_100**2;
            QsnMath = "√"+extra_num5+"+"+number3_100+"+"+number2;
            AnsMath = (extra_num5**(1/2))+number3_100+number2;
        }else{
            x = number1;
            let extra_num6 = x*number3;
            x_ans = number3;
            QsnMath = extra_num6+"÷"+ "??" +"=" + x_ans;
            AnsMath = x;
        }
        
    }
    
    function makeOption(x,y,z) {
        optionOnePage.innerHTML =AnsMath+x;
        optionTwoPage.innerHTML =AnsMath+y;
        optionThreePage.innerHTML =AnsMath+z;
        if (x===0) {
            correctAnswer = optionOnePage;
        } else if (y===0){
            correctAnswer = optionTwoPage;
        } else {
            correctAnswer = optionThreePage;
        }
    }
    
    
    let optionA = 0,optionB = 0;
    
    while(optionA===optionB || optionA===0 || optionB===0){
        optionA = randomNumber(10)-5;
        optionB = randomNumber(10)-5;
    };
    
    let randomNumberForOption = randomNumber(3);
    
    if (randomNumberForOption===1) {
        makeOption(0,optionA,optionB);
    }else if (randomNumberForOption===2) {
        makeOption(optionA,0,optionB);
    } else {
        makeOption(optionA,optionB,0)
    } 
    mathBox.innerHTML=QsnMath;
}

let dont_count= true;
let timer = 30;

function count_down(x) {
        dont_count=false;
        timer-=1;
    setTimeout(function() {
        if (timer > -1) {
            if (timer<4) {
                timerPage.style.color="#c90000";
            }else if(timer<10){
                timerPage.style.color="#e9de00";
            }else if (timer<20){
                timerPage.style.color="#03ae02";
            }else{
                timerPage.style.color="black";
            }
            timerPage.innerHTML="<h2>Time: "+timer+"</h2>";
            count_down();
        }else{
            updateHighScore();
        }
        
    }, 1000);
}

let gameOver= false;
start();
function check_ans(x) {
    if (dont_count) {
        count_down();
    }
    optionOnePage.style.background="red";
    optionTwoPage.style.background="red";
    optionThreePage.style.background="red";
    correctAnswer.style.background="green";
    
    if (timer > -1) {
    
        setTimeout(function() {
            start();
        
        },500);
    }else{
        updateHighScore();
    }
    
    if (!gameOver) {
        if (x===correctAnswer) {
            score+=4;
            timer+=3;
        }else{
            
            score-=3;
        }
    }
    scorePage.innerHTML="<h2>Score: "+score+"</h2>";
}

//Updating high score and name
function updateHighScore (){
        lostMsg.innerHTML="Your score is " + score;
        gameOver=true;
        play_again.style.display="block";
    if (score > (parseInt(store.getItem("highScore")))){
        nameBlock.style.display = "block";
        lostMsg.innerHTML="Congratulations!";
        ExtraMsg.innerHTML = "You have made a new high score.<br>Enter your name to show it!"
    }
}

//when user enter name afer making high score
function nameEntered(){
    let curPlayerName = document.getElementById("current-player-name").value;
    if (curPlayerName == ""){
        alert("Empty name!");
    } else {
        store.setItem("name",curPlayerName);
        store.setItem("highScore",""+score);
        highScoreShow.innerHTML = store.getItem("name") + " — " + store.getItem("highighScore");
        nameBlock.style.display = "none";
        lostMsg.innerHTML="NEW HIGH SCORER";
        ExtraMsg.innerHTML = store.getItem("name")+" scored "+store.getItem("highScore");
    }
}

//So that at the beginning high score and name shown
highScoreShow.innerHTML = store.getItem("name") + " — " + store.getItem("highScore");

//Hiding the main page when start clicked
function mainPageHide(){
    mainPage.style.display = "none";
    gamePage.style.display = "block";
}

//reset everything
function playAgain(){
    score = 0;
    timer = 30;
    scorePage.innerHTML="<h2>Score: "+score+"</h2>";
    timerPage.innerHTML="<h2>Time: "+timer+"</h2>";
    play_again.style.display = "none";
    nameBlock.style.display = "none";
    timerPage.style.color = "black";
    gameOver = false;
    dont_count = true;
    lostMsg.innerHTML = "";
    ExtraMsg.innerHTML = "";
    start();
}