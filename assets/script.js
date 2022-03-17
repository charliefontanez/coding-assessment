var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var responses = document.getElementById("buttons");
var startBtnEl = document.getElementById("start-btn");
var nextBtnEl = document.getElementById("nect-btn");

// * questions array
questionArray = ["Commonly used data types DO NOT Include: ______", "The condition in an If / Else statment is enclosed with ______",
 "Arrays in Javascript can be used to store _____.",
  "String values must be enclosed within ______ when being assigned to variables.", 
  "A very usefull tool used during developement and debugging for printing content to the debugger is: ______."];



const questionList = [
  {
    question: "Commonly used data types DO NOT Include: ______",
    answers: ['Strings', 'Booleans', "Alerts", "Numbers"],
    correctAnswer: "Alerts"
  },
  {
    question: "The condition in an If / Else statment is enclosed with ______",
    answers: ["Quotes", "Braces", "Parenthesis", "square brackets"],
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
  responses.classList.remove("hide");

  for (i = 0; i < 4; i++) {
    button = document.createElement("button");
    button.innerHTML = questionList[0].answers[i];
    button.classList.add("button");
    responses.appendChild(button);
  }

  changeQuestion();
  button[0].addEventListener()
}

function changeQuestion() {
  questionEl.innerText = questionArray[0];
  answerEl.innetHTML = questionPool[0].answers[0];
}


startBtnEl.addEventListener("click", startQuiz);




