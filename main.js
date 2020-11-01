
const mathBox= document.getElementById('math-box');   
const option_1_pg = document.getElementById("option-1");
const option_2_pg = document.getElementById("option-2");
const option_3_pg = document.getElementById("option-3");
const emoji_show = document.getElementById('emoji-show');
const score_pg = document.getElementById('score-box');
const timer_pg = document.getElementById('time-box');
const lost_msg = document.getElementById('lost-msg');
const xtra_msg = document.getElementById('xtra-msg');


var score=0;
var correct_ans= null;

function start() {
    var ans_math = null;
    var qsn_math =null;
    
    
    function randomNumber(x) {
        return Math.floor((Math.random() * x) + 1);
    }
    
    var number1 = randomNumber(10);
    var number2 = randomNumber(10);
    
    
    
    var randomNumber_for_oporator = randomNumber(5);
    if (randomNumber_for_oporator===1) {
        qsn_math = number1+"+"+number2;
        ans_math = number1+number2;
    }else if(randomNumber_for_oporator===2){
        qsn_math = number1+"-"+number2;
        ans_math = number1-number2;
    }else if(randomNumber_for_oporator===3){
        qsn_math = number1+"×"+number2;
        ans_math = number1*number2;
    }else{
        var xtr_number=number2*number1;
        qsn_math = xtr_number+"÷"+number2;
        
        ans_math = xtr_number/number2;
    }
    
    
    function make_option(x,y,z) {
        option_1_pg.innerHTML =ans_math+x;
        option_2_pg.innerHTML =ans_math+y;
        option_3_pg.innerHTML =ans_math+z;
    }
    
    
    var randomNumber_for_option= randomNumber(20);
    if (randomNumber_for_option===1) {
        make_option(0,1,-1);
        correct_ans=option_1_pg;
    }else if (randomNumber_for_option===2) {
        make_option(0,-1,1);
        correct_ans=option_1_pg;
    } else if(randomNumber_for_option===3){
        make_option(1,0,-1);
        correct_ans=option_2_pg;
    } else if(randomNumber_for_option===4){
        make_option(-1,0,1);
        correct_ans=option_2_pg;
    } else if(randomNumber_for_option===5){
        make_option(1,-1,0);
        correct_ans=option_3_pg;
    } else if(randomNumber_for_option===6){
        make_option(-1,1,0);
        correct_ans=option_3_pg;
    } else if (randomNumber_for_option===7) {
        make_option(0,1,2);
        correct_ans=option_1_pg;
    } else if (randomNumber_for_option===8) {
        make_option(0,2,1);
        correct_ans=option_1_pg;
    } else if(randomNumber_for_option===9){
        make_option(1,0,2);
        correct_ans=option_2_pg;
    } else if(randomNumber_for_option===10){
        make_option(2,0,1);
        correct_ans=option_2_pg;
    } else if(randomNumber_for_option===11){
        make_option(1,2,0);
        correct_ans=option_3_pg;
    } else if(randomNumber_for_option===12){
        make_option(2,1,0);
        correct_ans=option_3_pg;
    } else if (randomNumber_for_option===13) {
        make_option(0,-1,-2);
        correct_ans=option_1_pg;
    } else if (randomNumber_for_option===14) {
        make_option(0,-2,-1);
        correct_ans=option_1_pg;
    } else if(randomNumber_for_option===15){
        make_option(-1,0,-2);
        correct_ans=option_2_pg;
    } else if(randomNumber_for_option===16){
        make_option(-2,0,-1);
        correct_ans=option_2_pg;
    } else if(randomNumber_for_option===17){
        make_option(-1,-2,0);
        correct_ans=option_3_pg;
    } else if(randomNumber_for_option===18){
        make_option(-2,-1,0);
        correct_ans=option_3_pg;
    }else{
        make_option(-2,0,2);
        correct_ans=option_2_pg;
    }
    
    
    mathBox.innerHTML=qsn_math;


}

var dont_count= true;
var timer = 11;
function count_down(x) {
        dont_count=false;
        timer-=1;
    setTimeout(function() {
        if (timer>-1) {
            timer_pg.innerHTML="<h2>Time: "+timer+"</h2>";
            count_down();
        }else{
            lost_msg.innerHTML="Game Over";
            xtra_msg.innerHTML="Ask your enemy to beat your score.<br>You should love math,you should love math.";
        
        }
        
    }, 1000);
}

var gameOver= false;
start();
function check_ans(x) {
    if (dont_count) {
        count_down();
    }
    if (timer>0) {
    
        setTimeout(function() {
            start();
        
        },0);
    }else{
        lost_msg.innerHTML="Game Over";
        gameOver=true;
        xtra_msg.innerHTML="Ask your enemy to beat your score.<br>You should love math,you should love math.";
        
    }
    
    if (!gameOver) {
        
    
        if (x===correct_ans) {
            emoji_show.innerHTML="✔️ Absolutely correct ✔️";
            score+=5;
            timer+=2;
            
        }else{
            emoji_show.innerHTML="❌ Oppps..wrong ❌";
            score-=3;
        }
    }
    score_pg.innerHTML="<h2>Score: "+score+"</h2>";
}