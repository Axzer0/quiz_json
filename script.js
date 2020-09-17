//for data source
const question = {"question":[
        {
            "Question":"Question 1: Choose a option",
            "Oa":"Option Aaa",
            "Ob":"Option Bbb",
            "Oc":"Option Ccc",
            "Od":"Option Ddd",
            "ans":"a"
        },
        {
            "Question":"Question 2: Choose a option",
            "Oa":"Option AAA",
            "Ob":"Option BBB",
            "Oc":"Option CCC",
            "Od":"Option DDD",
            "ans":"b"
        },
        {
            "Question":"Question 3: Choose a option",
            "Oa":"Option ABC",
            "Ob":"Option BCD",
            "Oc":"Option CDE",
            "Od":"Option DEF",
            "ans":"d"
        },
        {
            "Question":"Question 4: Choose a option",
            "Oa":"Option AZY",
            "Ob":"Option BAZ",
            "Oc":"Option CBA",
            "Od":"Option DCB",
            "ans":"c"
        }
    ]};

//to change data
let i=0;

//for final result
let result=0;

//for each button click
function Option_btn_Click(val) {

    if(i<3){i++;}
    else{
        document.getElementById('p3').style.display="block";
        document.getElementById('p2').style.display="none";
        i=0;
    }
    let id;
    let qNum;
    switch (i) {
        case 1: id = "ans1";qNum=1;break;
        case 2: id = "ans2";qNum=2;break;
        case 3: id ="ans3";qNum=3;break;
        case 0: id ="ans4";qNum=4;break;
    }

    //setting results
    if (val === question.question[i].ans){
        document.getElementById(id).innerText = "Q"+qNum+" Selected Option: " + val + ", correct: +1";
        result++;
    }
    else{
        document.getElementById(id).innerText= "Q"+qNum+" Selected Option: " + val + ", incorrect: 0 [Correct Ans:"+question.question[i].ans+ "]";
    }
    setUp();
    document.getElementById('res').innerText = "Results : "+result;
}

//starting the quiz
function onStart() {
    document.getElementById('p1').style.display="none";
    document.getElementById('p2').style.display="block";
    document.getElementById('no_timer').style.display="block";
    setUp();
}

//setting up data
function setUp() {
    document.getElementById('question').innerHTML= question.question[i].Question;
    //set a;
    document.getElementById('b1').innerText= question.question[i].Oa;
    document.getElementById('b2').innerText= question.question[i].Ob;
    document.getElementById('b3').innerText= question.question[i].Oc;
    document.getElementById('b4').innerText= question.question[i].Od;
    //set b;
    document.getElementById('b5').innerText= question.question[i].Oa;
    document.getElementById('b6').innerText= question.question[i].Ob;
    document.getElementById('b7').innerText= question.question[i].Oc;
    document.getElementById('b8').innerText= question.question[i].Od;

}

//to restart the quiz
function restart() {
    i=0;
    result=0;
    clearInterval(this.int);
    stopTimer();
    document.getElementById('p1').style.display="block";
    document.getElementById('p3').style.display="none";
    document.getElementById('timer').style.display="none";
    document.getElementById('no_timer').style.display="none";
    document.getElementById('rem').style.display="none";


}

//to start on timer
function onTimer() {
    document.getElementById('p1').style.display="none";
    document.getElementById('p2').style.display="block";
    document.getElementById('timer').style.display="block";
    document.getElementById('rem').style.display="block";

    cP();
}

//function to switch panels on timer
function cP() {
    startTimer()
    setUp();
    this.int= setInterval(()=>{
        if(i<3){i++;}
        else{
            document.getElementById('p3').style.display="block";
            document.getElementById('p2').style.display="none";
            document.getElementById('rem').style.display="none";

            i=0;
            clearInterval(this.int);
            stopTimer();
        };stopTimer();setUp();startTimer();
    },10000)
}

//function for btn
function onClick2(val) {
    stopTimer();
    clearInterval(this.int);
    if(i<3){i++;}
    else{
        document.getElementById('p3').style.display="block";
        document.getElementById('p2').style.display="none";
        document.getElementById('rem').style.display="none";

        i=0;
        clearInterval(this.int);
        stopTimer();
    };

    let id;
    let qNum;
    switch (i) {
        case 1:
            id = "ans1";
            qNum = 1;
            break;
        case 2:
            id = "ans2";
            qNum = 2;
            break;
        case 3:
            id = "ans3";
            qNum = 3;
            break;
        case 0:
            id = "ans4";
            qNum = 4;
            break;
    }

    if (val === question.question[i].ans){
        document.getElementById(id).innerText = "Q"+qNum+" Selected Option: " + val + ", correct: +1";
        result++;
    }
    else{
        document.getElementById(id).innerText= "Q"+qNum+" Selected Option: " + val + ", incorrect: 0 [Correct Ans:"+question.question[i].ans+ "]";
    }
    cP();
    document.getElementById('res').innerText = "Results : "+result;
}


function startTimer(){
    let timeLeft=10;
    document.getElementById('rem').innerText="Time Remaining: "+timeLeft;
    this.i = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById('rem').innerText="Time Remaining: "+timeLeft;
        } else {
            timeLeft = 10;
        }
    }, 1000)

}

//to stop countdown
function stopTimer()
{
    clearInterval(this.i);
}
