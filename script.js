//for data store
const question = {"question":[
        {
            "Question":"Question 1: Choose a option",
            "Oa":"Option A",
            "Ob":"Option B",
            "Oc":"Option C",
            "Od":"Option D",
            "ans":"a"
        },
        {
            "Question":"Question 2: Choose a option",
            "Oa":"Option A",
            "Ob":"Option B",
            "Oc":"Option C",
            "Od":"Option D",
            "ans":"a"
        },
        {
            "Question":"Question 3: Choose a option",
            "Oa":"Option A",
            "Ob":"Option B",
            "Oc":"Option C",
            "Od":"Option D",
            "ans":"a"
        },
        {
            "Question":"Question 4: Choose a option",
            "Oa":"Option A",
            "Ob":"Option B",
            "Oc":"Option C",
            "Od":"Option D",
            "ans":"a"
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
    setUp();
}

//setting up data
function setUp() {
    document.getElementById('question').innerHTML= question.question[i].Question;
    document.getElementById('b1').innerText= question.question[i].Oa;
    document.getElementById('b2').innerText= question.question[i].Ob;
    document.getElementById('b3').innerText= question.question[i].Oc;
    document.getElementById('b4').innerText= question.question[i].Od;
}

function restart() {
    i=0;
    result=0;
    document.getElementById('p1').style.display="block";
    document.getElementById('p3').style.display="none";
}
