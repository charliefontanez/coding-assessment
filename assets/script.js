var questionEl = document.getElementById("question");
var answerBtnsEl = document.getElementById("btn-list");
var answerButtonn1 = document.querySelector("button[name='answer1']");
var answerButtonn2 = document.querySelector("button[name='answer2']");
var answerButtonn3 = document.querySelector("button[name='answer3']");
var answerButtonn4 = document.querySelector("button[name='answer4']");
var startBtnEl = document.getElementById("start-btn");
var nextBtnEl = document.getElementById("next-btn");
var timerEl = document.getElementById("timer-count");
var h2El = document.getElementById("question");
var questionCount = 0;

var count = 74;

// * questions array
const questionList = [
  {
    question: "Commonly used data types DO NOT Include: ______",
    answers: ['Strings', 'Booleans', "Alerts", "Numbers"],
    correctAnswer: "Alerts"
  },
  {
    question: "The condition in an If / Else statment is enclosed with ______",
    answers: ["Quotes", "Braces", "Parenthesis", "Square Brackets"],
    correctAnswer: "Parenthesis",
  },
  {
    question: "Arrays in Javascript can be used to store _____.",
    answers: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: "all of the above",
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: ['commas', 'brackets', 'quotes', 'parenthesis'],
    correctAnswer: 'quotes',
  },
  {
    question: "A very usefull tool used during developement and debugging for printing content to the debugger is: ______.",
    answers: ['javascript', 'terminal/bash', "for loops", "console.log()"],
    correctAnswer: "console.log()",
  }
]

function startQuiz() {
  startBtnEl.classList.add("hide");
  answerBtnsEl.classList.remove("hide");
  startTimer();
  loadQuestion();
}

function createButtons() {
  for (i = 0; i < 4; i++) {
    button = document.createElement("button")
    buttonListEl.appendChild(button);
  }
}

function loadQuestion() {
  questionEl.innerText = questionList[0].question;
  answerButtonn1.innerText = (questionList[0].answers[0]);
  answerButtonn2.innerText = questionList[0].answers[1];
  answerButtonn3.innerText = questionList[0].answers[2];
  answerButtonn4.innerText = questionList[0].answers[3];
}

function startTimer() {
  timerEl.innerHTML = count + 1;
  var timer = setInterval(function() {
    timerEl.innerHTML = count;
    count = count - 1;
    if (count < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

startBtnEl.addEventListener("click", startQuiz);






