const quizData=[
    {
        question: "Which question runs in web browser ?",
        a: "JAVA",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    
    {
        question: "What does CSS stand for ?",
        a: "Central Style sheet",
        b: "Cascading Style Sheets",
        c: "Casecadind Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    
    {
        question: "What Does HTML stands for ?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    
    {
        question: "What year was JavaScript launched ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz=document.getElementById('quiz')
const answerls=document.querySelectorAll('.answer')
const questionEL=document.getElementById('question')
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswer()
    const currentQuizData=quizData[currentQuiz]

    questionEL.innerText=currentQuizData.question

    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswer(){
    answerls.forEach(answerEL => answerEL.checked = false)
}

function getSelected(){
    let answer

    answerEL.forEach(answerEL=>{
        if(answerEL.checked){
            answer=answerEL.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',() => {
    const answer =getSelected()
    
    if(answer){
        if(answer ===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2> you answered  ${score}/${quizData.length} question correctly</h2> 
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})