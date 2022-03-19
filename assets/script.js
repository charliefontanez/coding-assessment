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
    answers: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: "all of the above",
  },
  {
    question: "4. String values must be enclosed within ______ when being assigned to variables.",
    answers: ['commas', 'brackets', 'quotes', 'parenthesis'],
    correctAnswer: 'quotes',
  },
  {
    question: "5. A very usefull tool used during developement and debugging for printing content to the debugger is: ______.",
    answers: ['javascript', 'terminal/bash', "for loops", "console.log()"],
    correctAnswer: "console.log()",
  }
]
var startBtnEl = document.getElementById("start-btn");
var questionEl = document.getElementById("question");
var btnListEl = document.querySelector(".btn-list");
var answerButtonn1 = document.getElementById("btn-1");
var answerButtonn2 = document.getElementById("btn-2");
var answerButtonn3 = document.getElementById("btn-3");
var answerButtonn4 = document.getElementById("btn-4");
var nextBtnEl = document.getElementById("next-btn");
var timerEl = document.getElementById("timer-count");
var h2El = document.getElementById("question");
var questionNum = 0;
var correctAnswers = 0;

var timerCount = 74;



function loadQuestion() {
  questionEl.textContent = questionList[questionNum].question;
  answerButtonn1.textContent = questionList[questionNum].answers[0];
  answerButtonn2.textContent = questionList[questionNum].answers[1];
  answerButtonn3.textContent = questionList[questionNum].answers[2];
  answerButtonn4.textContent = questionList[questionNum].answers[3];


  answerButtons[0].addEventListener("click", console.log("hello"));
  answerButton2.addEventListener("click", console.log("hello"));
  answerButton3.addEventListener("click", console.log("hello"));
  answerButton4.addEventListener("click", console.log("hello"));

  // for (var i = 0; i < answerButtons.length; i++) {
  //   answerButtons[i].addEventListener("click", function() {
  //     if (this.textContent === questionList[questionNum].correctAnswer) {
  //       correctAnswers++;
  //       console.log("Correct answers = "+ correctAnswers);
  //     }
  //   });
  // }

}

function startTimer() {
  timerEl.innerHTML = timerCount + 1;
  var timer = setInterval(function() {
    timerEl.innerHTML = timerCount;
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


startBtnEl.addEventListener("click", startQuiz);






