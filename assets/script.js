const questionList = [
  {
    question: "1. Commonly used data types DO NOT Include: ______",
    answers: ['Strings', 'Booleans', "Alerts", "Numbers"],
    correctAnswer: "Alerts",
  },
  {
    question: "2. The condition in an If / Else statment is enclosed with ______",
    answers: ["Quotes", "Braces", "Parenthesis", "Square Brackets"],
    correctAnswer: "Parenthesis",
  },
  {
    question: "3. Arrays in Javascript can be used to store _____.",
    answers: ['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the above'],
    correctAnswer: "All of the above",
  },
  {
    question: "4. String values must be enclosed within ______ when being assigned to variables.",
    answers: ['Commas', 'Brackets', 'Quotes', 'Parenthesis'],
    correctAnswer: 'Quotes',
  },
  {
    question: "5. A very usefull tool used during developement and debugging for printing content to the debugger is: ______.",
    answers: ['javascript', 'terminal/bash', "for loops", "console.log()"],
    correctAnswer: "console.log()",
  }
]
var startBtnEl = document.getElementById("start-btn");
var viewHighScoresEl = document.querySelector("view-highscore");
var questionEl = document.getElementById("question");
var btnListEl = document.querySelector(".btn-list");
var answerButton1 = document.querySelector("#btn-1");
var answerButton2 = document.querySelector("#btn-2");
var answerButton3 = document.querySelector("#btn-3");
var answerButton4 = document.querySelector("#btn-4");
var nextBtnEl = document.getElementById("next-btn");
var timerEl = document.getElementById("timer-count");
var questionNum = 0;
var score = 0;

var scoreList = [];

var userScore = {initial: "", score: 0};

var timerCount = 74;

function scoreScreen() {
  scoreSubmitEl = document.querySelector(".your-score-screen");
  quizContainerEl = document.querySelector(".quiz-container");
  scoreDisplayEl = document.querySelector("#user-score-display");
  scoreDisplayEl.textContent = score;
  quizContainerEl.classList.add("hide");
  scoreSubmitEl.classList.remove("hide");
  timerCount = 0;
  console.log("Done")
  console.log("Your score is: " + score);
}


function answerSelect(event) {
  checkSelectedAnswer(event);
  questionNum++;
  if (questionNum > 4) {
    scoreScreen();
  }
  else {
    loadQuestion();
  }  
}

function nextQuestion() {
  questionEl.textContent = questionList[questionNum].question;
  answerButton1.textContent = questionList[questionNum].answers[0];
  answerButton2.textContent = questionList[questionNum].answers[1];
  answerButton3.textContent = questionList[questionNum].answers[2];
  answerButton4.textContent = questionList[questionNum].answers[3];
}

function checkSelectedAnswer(event) {
  if (event.target.textContent === questionList[questionNum].correctAnswer) {
    score++;
  }
  else {
      if (timerCount < 10) {
      timerCount = 0;
    }
    else {
      timerCount -= 9;
      timerEl.innerText = timerCount;
    }
  }
}

function endQuiz() {
  questionEl.textContent = "Your score is " + score;
}

function loadQuestion() {
  console.log((questionNum + 1) + '.');
  questionEl.textContent = questionList[questionNum].question;
  answerButton1.textContent = questionList[questionNum].answers[0];
  answerButton2.textContent = questionList[questionNum].answers[1];
  answerButton3.textContent = questionList[questionNum].answers[2];
  answerButton4.textContent = questionList[questionNum].answers[3];
}

function startTimer() {
  timerEl.innerText = timerCount + 1;

  var timer = setInterval(function() {
    timerEl.innerText = timerCount;
    timerCount = timerCount - 1;
    if (timerCount < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// function showHideButtonAnswers() {
//   for (var i = 0; i < answerBtnsEl.classList.length; i++) {
//     if (answerBtnsEl.classList[i] == "hide") {
//       answerBtnsEl.classList.remove("hide");
//     }
//     else if (i == answerBtnsEl.classList.length - 1) {
//       answerBtnsEl.classList.add("hide");
//     }
//   }
// }

function startQuiz() {
  console.log("started");
  startBtnEl.classList.add("hide");
  btnListEl.classList.remove("hide");
  
  
  // answerBtnsEl.classList.remove("hide");
  loadQuestion();
  startTimer();
}

function saveScore(e) {
  e.preventDefault();
  userScore.initial = document.getElementById("score-form-text").value;
  userScore.score = score;
  scoreList.push(userScore);
  console.dir(userScore);
  console.dir(scoreList[0]);
}


var saveScoreFormEl = document.getElementById("score-form");
// var saveScoreTxt = document.getElementById("score-form-text");

saveScoreFormEl.addEventListener("submit", saveScore)

/* Menu Event Listeners */
startBtnEl.addEventListener("click", startQuiz);
/* Quiz Event Listeners */
answerButton1.addEventListener("click", answerSelect);
answerButton2.addEventListener("click", answerSelect);
answerButton3.addEventListener("click", answerSelect);
answerButton4.addEventListener("click", answerSelect);






