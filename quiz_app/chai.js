const questions = [
    {
        question: "what is the largest animal in the world",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "what is the smallest country in the world",
        answers: [
            {text: "Vetican", correct: false},
            {text: "Nepal", correct: false},
            {text: "Bhutan", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },
    {
        question: "what is the smallest continent in the world",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
];

const questionelement = document.getElementById("question")
const answerbutton = document.getElementById("answer-buttons")
const nextbutton = document.getElementById("next_btn")

let currentquestionindex = 0;
let score = 0;

function startquiz(){
    currentquestionindex = 0
    score = 0
    nextbutton.innerHTML = "Next"
    showquestion()
}

function showquestion(){
    resetstate()
    let currentquestion = questions[currentquestionindex]
    let questionnumber = currentquestionindex + 1 
    questionelement.innerHTML = questionnumber + ". " + currentquestion.question

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button") 
        button.innerHTML = answer.text
        button.classList.add("btn")   
        answerbutton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectanswer)
    });
    
}

function resetstate(){
    nextbutton.style.display = "none"
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild)
    }
}

function selectanswer(e){
    const selectedbtn = e.target
    const iscorrect = selectedbtn.dataset.correct === "true"
    if(iscorrect){
        selectedbtn.classList.add("correct")
        score++
    }
    else{
        selectedbtn.classList.add("incorrect")
    }

    Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextbutton.style.display = "block"
}

nextbutton.addEventListener('click', ()=>{
    if(currentquestionindex < questions.length){
        handlenextbutton()
    }
    else{
        startquiz()
    }
})

function showscore(){
    resetstate()
    questionelement.innerHTML = `you scored ${score} out of ${questions.length}!`
    nextbutton.innerHTML = "play again"
    nextbutton.style.display = "block"
}

function handlenextbutton(){
    currentquestionindex++
    if(currentquestionindex<questions.length){
        showquestion()
    }
    else{
        showscore()
    }
}





startquiz()

