let buttons = document.querySelectorAll("#answers")
let time = document.getElementById("time")
let welcomePage = document.getElementById("section-1")
let highScore = document.getElementById("results-page")
let questionPage = document.getElementById("question-page")
let count = 100
let finalScore = ''
let timer;
let questionsIndex = 0
let questions = [
    {
        questions: "Commonly used data types DO Not Include:",
        answers: ["string", "Booleans","Alerts", "Numbers"],
        correctAnswer:"Alerts"
    },
    {
        questions: " The condition in an if/else statement is enclosed with _____ ",
        answers: ["quotes", " curly brackets", "parenthesis","square brackets"],
        correctAnswer:"quotes"
    },
    {
        questions: "Arrays in JavaScript can be used to store_____ ",
        answers: ["numbers and strings","other arrays", "booleans","all of the above"],
        correctAnswer:"all of the above"
    },
    {
        questions: " String values must be enclosed within __ when being assigned to variables",
        answers: ["commas","curly brackets","quotes", "parenthesis"],
        correctAnswer:"comma"
    },

    {
        questions: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash","for loops","console.log"],
        correctAnswer:"console.log"
    },

];

function timerCountdown() {

    timer = setInterval(function () {
        count--;
        time.textContent = count
        // console.log(buttons)
        if (count === 0) {
       
    finish();

        }
    }, 1000);
}

function startQuiz() {
    welcomePage.setAttribute("style", "display:none")
    timerCountdown()
    loadQuestions()
}

function loadQuestions() {
    if (questionsIndex === questions.length) {
    finish()
        // quiz is done.
    }
    const question = questions[questionsIndex]

    document.getElementById("answers").innerHTML = ""

    document.getElementById("question").innerHTML= question.questions


    question.answers.forEach(answer => {
        var li = document.createElement("li")
        li.innerHTML = answer
        li.classList.add("answer-item")
        document.getElementById("answers").appendChild(li)
        console.log(li)
        // li.addEventListener('click', function (event) {
        //     // get the clicked element
        //     const clickedElement = event.target
        //     const lianswer = event.target.innerHTML
        //     answerQuestion(event.target.innerHTML)
          
        // });
    

    });
}




function answerQuestion(answer) {
    const question = questions[questionsIndex]
    if (answer!== question.correctAnswer) {
        count -= 20.

 
    }
    questionsIndex ++
    loadQuestions()
}

function finish() {
    clearInterval(timer)
    ScoreSection()

}

function ScoreSection() {
// if you finish before the time ends let final score equal time left. 
// questionPage.setAttribute("style", "display:none")
finalScore = count

    console.log("HELLO!")
}