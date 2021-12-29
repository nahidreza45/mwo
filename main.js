

// All HTML contents
const mathBox = document.getElementById('math-box');   
const optionOnePage = document.getElementById("option-1");
const optionTwoPage = document.getElementById("option-2");
const optionThreePage = document.getElementById("option-3");
const scorePage = document.getElementById('score-box');
const timerPage = document.getElementById('time-box');
const lostMsg = document.getElementById('lost-msg');
const ExtraMsg = document.getElementById('xtra-msg');
const playAgain = document.getElementById('play-again-links');
const highScoreShow = document.getElementById('hss');
const nameBlock = document.getElementById('name-part');
const mainPage = document.getElementById('main-pg');
const gamePage = document.getElementById('game-pg');

// It will store highscore and name at local storage
let store = window.localStorage;
if ((store.getItem("highScore")) == null) {
    store.setItem("highScore","0");
    store.setItem("name","You");
}

// It will store on time score
let score = 0;
let correctAnswer = null;

// The main function, It will be called when any option button clicked
function start() {
    let AnsMath = null;
    let QsnMath = null;
    
    // All options background will be same
    optionOnePage.style.background = "#512275";
    optionTwoPage.style.background = "#512275";
    optionThreePage.style.background = "#512275";
    
    // It will generate a random number, It will need many times
    function randomNumber(x) {
        return Math.floor((Math.random() * x) + 1);
    }
    
    // Random numbers will generate and store
    let number1 = randomNumber(10);
    let number2 = randomNumber(10);
    let number3 = randomNumber(10);
    let number1_100 = randomNumber(100);
    let number2_100 = randomNumber(100);
    let number3_100 = randomNumber(100);
    
    // This temporary variable will help while creating questions
    let temp = null;
    
    // This random number will select what kind of question player get
    let randomNumberForOporator = randomNumber(5);
    
    // This is for questions difficultly. More score means more difficult question
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
            temp = number1*number2;
            QsnMath = temp+"÷"+number2;
            AnsMath = temp / number2;
        }else{
            QsnMath = "??"+"+"+number3 +"=" + (number3+number1);
            AnsMath = number1;
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
            QsnMath = "??"+"+"+number3_100 +"=" + (number2_100+number3_100);
            AnsMath = number2_100;
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
            QsnMath = number2+" × ??"+"=" + (number2*number3);
            AnsMath = number3;
        }
    }else if (score<70){
        if (randomNumberForOporator===1) {
            QsnMath = number1_100+"+"+number2+"×"+number3;
            AnsMath = number1_100 + number2 * number3;
        }else if (randomNumberForOporator===2){
            QsnMath = number1+"²"+"+"+number2+"°"+"+"+number3+"³";
            AnsMath = (number1**2) + (number2**0) + (number3**3);
        }else if (randomNumberForOporator===3){
            temp = number1_100*number3*number2;
            QsnMath = temp +"÷"+number2;
            AnsMath = temp / number2;
        }else if (randomNumberForOporator===4){
            temp=number3**2;
            QsnMath = "√"+temp+"+"+number2;
            AnsMath = (temp**(1/2))+number2;
        }else{
            QsnMath = number3_100 + "-" + "??" + "=" + (number3_100 - number2_100) ;
            AnsMath = number2_100;
        }
    }else{
        if (randomNumberForOporator===1) {
            QsnMath = number1_100+"-"+number2_100+"×"+number3;
            AnsMath = number1_100 - number2_100 * number3;
        }else if (randomNumberForOporator===2){
            QsnMath = number1+"²"+"+"+number2+"²"+"+"+number3+"²";
            AnsMath = (number1**2) + (number2**2) + (number3**2);
        }else if (randomNumberForOporator===3){
            temp = number1_100*number3*number2;
            QsnMath = temp+"÷"+number2+"+"+number3_100;
            AnsMath = temp / number2+number3_100;
        }else if (randomNumberForOporator===4){
            temp = number1_100**2;
            QsnMath = "√"+temp+"+"+number3_100+"+"+number2;
            AnsMath = (temp**(1/2))+number3_100+number2;
        }else{
            temp = number1*number3;
            QsnMath = temp+"÷"+ "??" +"=" + number3;
            AnsMath = number1;
        }
    }
    
    // This function creats options
    function makeOption(x,y,z) {
        optionOnePage.innerHTML =AnsMath+x;
        optionTwoPage.innerHTML =AnsMath+y;
        optionThreePage.innerHTML =AnsMath+z;
        
        // Adding nothing means that one is the correct answer
        if (x===0) {
            correctAnswer = optionOnePage;
        } else if (y===0){
            correctAnswer = optionTwoPage;
        } else {
            correctAnswer = optionThreePage;
        }
    }
    
    //Creating difference between correct answer and other two options
    let optionA = 0,optionB = 0;
    
    // This makes two other options different and unic from correct answer
    while(optionA===optionB || optionA===0 || optionB===0){
        optionA = randomNumber(10)-5;
        optionB = randomNumber(10)-5;
    };
    
    // A random number for option creat
    let randomNumberForOption = randomNumber(3);
    
    // Options are creating
    if (randomNumberForOption===1) {
        makeOption(0,optionA,optionB);
    }else if (randomNumberForOption===2) {
        makeOption(optionA,0,optionB);
    } else {
        makeOption(optionA,optionB,0)
    } 
    
    // Showing question to player
    mathBox.innerHTML=QsnMath;
}

// It will restrict count down when game over
let dontCount= true;
// Time user will get at the beginning
let timer = 30;

// This function will start count down
function countDown() {
        dontCount=false;
        timer-=1;
    setTimeout(function() {
        if (timer > -1 && score > -4) {
            if (timer<4) {
                timerPage.style.color="#c90000";
            }else if(timer<0){
                timerPage.style.color="#dba902";
            }else if (timer<20){
                timerPage.style.color="#03ae02";
            }else{
                timerPage.style.color="black";
            }
            timerPage.innerHTML="<h2>Time: "+timer+"</h2>";
            countDown();
        }else{
            updateHighScore();
        }
        
    }, 1000);
}

let gameOver = false;

start();

function check_ans(x) {
    if (timer > -1 && score > -4) {
        setTimeout(function() {
            start();
        },500);
    }else{
        updateHighScore();
    }
    if (dontCount) {
        countDown();
    }
    if (!gameOver) {
        optionOnePage.style.background="red";
        optionTwoPage.style.background="red";
        optionThreePage.style.background="red";
        correctAnswer.style.background="green";
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
        lostMsg.innerHTML=`${score < 0 ? "Game Over <br><h6 id = 'low-score-msg' >Score lower than -3 </h6>" : "!!••TIME UP••!!<br>Your score is " + score}`;
        gameOver=true;
        playAgain.style.display = "block";
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
        highScoreShow.innerHTML = store.getItem("name") + " <strong> → </strong> " + store.getItem("highighScore");
        nameBlock.style.display = "none";
        lostMsg.innerHTML="NEW HIGH SCORER";
        ExtraMsg.innerHTML = store.getItem("name")+" scored "+store.getItem("highScore");
    }
}

//So that at the beginning high score and name shown
highScoreShow.innerHTML = store.getItem("name") + " <strong> → </strong>" + store.getItem("highScore");

//Hiding the main page when start clicked
function mainPageHide(){
    mainPage.style.display = "none";
    gamePage.style.display = "block";
}

//reset everything
function playAgainF(){
    score = 0;
    timer = 30;
    scorePage.innerHTML="<h2>Score: "+score+"</h2>";
    timerPage.innerHTML="<h2>Time: "+timer+"</h2>";
    playAgain.style.display = "none";
    nameBlock.style.display = "none";
    timerPage.style.color = "black";
    gameOver = false;
    dontCount = true;
    lostMsg.innerHTML = "";
    ExtraMsg.innerHTML = "";
    start();
}