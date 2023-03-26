var buttons = document.querySelectorAll('.answer-item');
var finalScoreEl = document.getElementById('final-score')
let time = document.getElementById('time');
let welcomePage = document.getElementById('section-1');
let highScore = document.getElementById('results-page');
let questionPage = document.getElementById('quiz-questions');
let count = 100;
let timer;
let questionsIndex = 0;
let questions = [
  {
    questions: 'Commonly used data types DO Not Include:',
    answers: ['string', 'Booleans', 'Alerts', 'Numbers'],
    correctAnswer: 'Alerts',
  },
  {
    questions: ' The condition in an if/else statement is enclosed with _____ ',
    answers: ['quotes', ' curly brackets', 'parenthesis', 'square brackets'],
    correctAnswer: 'quotes',
  },
  {
    questions: 'Arrays in JavaScript can be used to store_____ ',
    answers: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    correctAnswer: 'all of the above',
  },
  {
    questions:
      ' String values must be enclosed within __ when being assigned to variables',
    answers: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    correctAnswer: 'quotes',
  },

  {
    questions:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 'console.log',
  },
];

function timerCountdown() {
  timer = setInterval(function () {
    count--;
    time.textContent = count;
    if (count === 0) {
      finish();
    }
  }, 1000);
}

function startQuiz() {
  welcomePage.setAttribute('style', 'display:none');
  timerCountdown();
  loadQuestions();
}
document.querySelector("#button-1").addEventListener("click", startQuiz);
function loadQuestions() {
  if (questionsIndex >= questions.length) {
    finish();
    // quiz is done.
  }
  const question = questions[questionsIndex];

  document.getElementById('answers').innerHTML = '';

  document.getElementById('question').innerHTML = question.questions;

  question.answers.forEach((answer) => {
    var li = document.createElement('li');
    var button = document.createElement('button')
    li.appendChild(button)
    button.innerHTML = answer;
    li.classList.add('answer-item');
    document.getElementById('answers').appendChild(li);

    li.addEventListener('click', checkAnswer);
  });
}

function checkAnswer(event) {
  const question = questions[questionsIndex];
  if (event.target.innerHTML !== question.correctAnswer) {
    count -= 20;
  }
  questionsIndex++;
  loadQuestions();
}

function finish() {
  clearInterval(timer);
  ScoreSection();
}

function ScoreSection() {
  let initials = document.getElementById('initials');
  // if you finish before the time ends let final score equal time left.
  questionPage.setAttribute("style", "display:none")
  highScore.setAttribute("style", "display:block")
  if (count < 0) {
    count = 0

  }
  finalScoreEl.innerText = count;
  console.log(count);

  var submitButton = document.getElementById("Submit");
  submitButton.addEventListener('click', function () {
    var nameInitial= initials.value.trim();
    console.log(nameInitial);
    localStorage.setItem('initials', nameInitial);
  localStorage.setItem('score', count);
  window.location.href = 'highscore.html';
});
}
