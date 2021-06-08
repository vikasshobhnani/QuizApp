//const quizcontainer = document.getElementById('quizcontainer');
const questiondisplay = document.getElementById('question');
const submit = document.getElementById('submit-btn');
const myanswerslist = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const myquestions = [
    {
        question : "What is the full form of HTML?",
        a : "Hyper Text Markup Language",
        b : "Hyper Tech Machine Language",
        c : "Hyper Text Markup Loop",
        d : "Hyper Transfer Machine Language",
        correctanswer : "a"
    },

    {
        question : "What invented javascript?",
        a : "Brendon Eich",
        b : "Bjarne Stroustrup",
        c : "Guido Van Rossum",
        d : "James Gosling",
        correctanswer : "a"
    },

    {
        question : "Which one of these is javascript package manager?",
        a : "Node js",
        b : "NPM",
        c : "Typescript",
        d : "Express js",
        correctanswer : "b"
    },

    {
        question : "Which tool can you use to ensure code quality?",
        a : "Angular",
        b : "Jquery",
        c : "RequireJS",
        d : "ESlint",
        correctanswer : "d"
    },

    {
        question : "How do you find the minimum of x and y in javascript?",
        a : "min(x,y)",
        b : "Math.min(x,y)",
        c : "Math.min(xy)",
        d : "min(xy)",
        correctanswer : "b"
    }
]

let currentquestion= 0;
let score = 0;
var ans;
loadquiz();
getselected();

function loadquiz(){
    deselectanswers();
    const currentquestiondata = myquestions[currentquestion];
    questiondisplay.innerText = `Q.${currentquestion + 1} ` + currentquestiondata.question;

    a_text.innerText = currentquestiondata.a;
    b_text.innerText = currentquestiondata.b;
    c_text.innerText = currentquestiondata.c;
    d_text.innerText = currentquestiondata.d;
}

function getselected(){
    let answer = undefined;
    myanswerslist.forEach((myanswer) => {
        if(myanswer.checked){
            answer = myanswer.id;
        }
    })
    return answer;
}

function deselectanswers(){
    myanswerslist.forEach((myanswer) =>{
        myanswer.checked = false;
    });
}

submit.addEventListener('click' , () =>{
    ans = getselected();
    console.log(ans);
    if(ans){
        if(ans === myquestions[currentquestion].correctanswer){
            score++;
        }
        currentquestion++;
        if(currentquestion < myquestions.length){
            loadquiz();
        }
        else{
            //TODO : show  results
            //loadresults();  
            //questiondisplay.innerHTML = `<h2>Your score is ${score}</h2>`;
            quiz.innerHTML = `<h2 id="scoredisplay"> Your Score : ${score} out of ${myquestions.length}</h2>`;
        }
    }
})