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
var viewHighScores = document.querySelector(".view-highscore");
var h2El = document.getElementById("question");
var btnListEl = document.querySelector(".btn-list");
var answerButton1 = document.querySelector("#btn-1");
var answerButton2 = document.querySelector("#btn-2");
var answerButton3 = document.querySelector("#btn-3");
var answerButton4 = document.querySelector("#btn-4");
var nextBtnEl = document.getElementById("next-btn");
var timerEl = document.getElementById("timer-count");

/* Score Screen Selectors */
const yourScoreScreenEl = document.getElementById("#your-score-screen");
var quizEl = document.querySelector(".quiz-container");
var yourScoreEl = document.querySelector("#user-score-display");
var scoreListEl = document.getElementById("score-list");
var saveScoreFormEl = document.getElementById("your-score-screen");

saveScoreFormEl.style.display = "none";

var questionNum = 0;
var score = 0;



var scoreList = JSON.parse(window.localStorage.getItem('highscores')) || [];



var userScore = {initial: "", score: 0};


var timerCount = 74;


/* Initial Quiz Functions */
function startQuiz() {
  console.log("started");
  startBtnEl.style.display = "none";
  btnListEl.style.display = "flex";
  loadQuestion();
  startTimer();
}

/* Quiz answer section */
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
  h2El.textContent = questionList[questionNum].question;
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

function loadQuestion() {
  console.log((questionNum + 1) + '.');
  h2El.textContent = questionList[questionNum].question;
  answerButton1.textContent = questionList[questionNum].answers[0];
  answerButton2.textContent = questionList[questionNum].answers[1];
  answerButton3.textContent = questionList[questionNum].answers[2];
  answerButton4.textContent = questionList[questionNum].answers[3];
}
/* End Quiz answer Section */

function scoreScreen() {
  yourScoreEl.textContent = score;
  quizEl.style.display = "none";
  let yourScoreScreen = document.getElementById("your-score-screen");
  yourScoreScreen.style.display = "";
  timerCount = 0;
  console.log("Done")
  console.log("Your score is: " + score);
}

function startTimer() {
  timerEl.innerText = timerCount + 1;

  var timer = setInterval(function() {
    timerEl.innerText = timerCount;
    timerCount = timerCount - 1;
    if (timerCount < 0) {
      clearInterval(timer);
    }
  }
  , 1000);
}

function showScores(e) {
  
  for (var i = 0; i < scoreList.length; i++) {
    let newScore = document.createElement("li");
    newScore.appendChild(document.createTextNode(scoreList[i].initial +  " " + scoreList[i].score + "/5"));
    console.dir(newScore);
    scoreListEl.appendChild(newScore);
  }

  document.querySelector("#highscores-page").style.display = "block";

  if (quizEl.style.display == "") {
    quizEl.style.display = "none";
  }
  if (yourScoreEl.style.display == "") {
    yourScoreEl.style.display == "none";
  }
  

}

function saveScore(e) {
  e.preventDefault();

  userScore.initial = document.getElementById("score-form-text").value;
  userScore.score = score;
  scoreList.push(userScore);
  console.log(scoreList);

  window.localStorage.setItem('highscores', JSON.stringify(scoreList));

  h2El.textContent = "Coding Quiz.";

  e.target.parentNode.style.display = "none";
  startBtnEl.style.display = "block";
  btnListEl.style.display = "none";
  quizEl.style.display = "";

  timerCount = 74;
  questionNum = 0;
}

// var saveScoreTxt = document.getElementById("score-form-text");



/* Menu Event Listeners */
startBtnEl.addEventListener("click", startQuiz);
viewHighScores.addEventListener("click", showScores);
saveScoreFormEl.addEventListener("submit", saveScore)
/* Quiz Event Listeners */
answerButton1.addEventListener("click", answerSelect);
answerButton2.addEventListener("click", answerSelect);
answerButton3.addEventListener("click", answerSelect);
answerButton4.addEventListener("click", answerSelect);






