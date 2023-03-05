var startButton = document.getElementById("start");
var questionsDiv = document.getElementById("questions");
var timeStarter = document.getElementById("time");
var submitButton = document.getElementById("submit");
var mainquestions = document.getElementById("mainquestions");
var answers = document.getElementById("answers");
var name = document.getElementById("initials");
var totalScore = document.getElementById("total-score");
var correctAns = 0;
var questionIndex = 0;

var myQuestions = [
  {
    question: "Who developed JavaScript ?",
    qanswers: [
      "James Gosling",
      "Bjarne Stroustrup",
      "Berndan Eich",
      "Rasmas Lerdorf",
    ],
    correct: "Berndan Eich",
  },
  {
    question: "What is the first name of JavaScript ?",
    qanswers: ["Java", "Mocha", "LiveScript", "TypeScript"],
    correct: "Mocha",
  },
  {
    question:
      "Which of the following is used to read ant HTML page and render it?",
    qanswers: ["Web Server", "Web Network", "Web Browser", "Web Matrix"],
    correct: "Web Browser",
  },
  {
    question: "Which element is used to get highlighted text in HTML5 ",
    qanswers: ["<u>", "<mark>", "<highligh>", "<b>"],
    correct: "<mark>",
  },
  {
    question: "Which element is used for styling HTML5 element ",
    qanswers: ["JavaScript", "PHP", "jQuery", "CSS"],
    correct: "CSS",
  },
];

var timeLeft = 60;
function startQuiz() {
  // hide start screen
  var startPage = document.getElementById("start-page");
  startPage.setAttribute("class", "hide");

  questionsDiv.setAttribute("class", "start");

  timerId = setInterval(function () {
    timeLeft--;
    timeStarter.textContent = timeLeft;

    if (timeLeft <= 0) {
      timeLeft = 0;
      finishedQuiz();
    }
  }, 1000);

  timeStarter.textContent = timeLeft;
  getMyQuestion();
}

function getMyQuestion() {
  if (questionIndex === myQuestions.length) {
    finishedQuiz();
    timeStarter.textContent = 0;
    return;
  }
  var currentQuestion = myQuestions[questionIndex];

  mainquestions.textContent = currentQuestion.question;

  answers.textContent = "";
  for (var i = 0; i < currentQuestion.qanswers.length; i++) {
    var answer = currentQuestion.qanswers[i];
    var answerButton = document.createElement("button");
    answerButton.setAttribute("value", answer);
    answerButton.setAttribute("style", "padding:8px; margin:8px");
    answerButton.textContent = answer;
    answers.appendChild(answerButton);
    answerButton.addEventListener("click", answerSelect);
  }
}

function answerSelect() {
  if (questionIndex === myQuestions.length) {
    finishedQuiz();
    return;
  }
  var selectedAns = this.value;
  console.log(questionIndex);
  if (selectedAns === myQuestions[questionIndex].correct) {
    handleCorrect();
    console.log("correct");
  } else {
    handleWrong();
    console.log("incorrect");
  }
  questionIndex++;
  console.log(questionIndex);
  console.log(timeLeft);
  getMyQuestion();
}

function handleCorrect() {
  correctAns++;
}

function handleWrong() {
  timeLeft -= 15;
}

function finishedQuiz() {
  totalScore.textContent = correctAns;
  clearInterval(timerId);
  timeLeft = 0;
  var lastPage = document.getElementById("lastPage");
  lastPage.setAttribute("class", "start");
  mainquestions.textContent = "";
  answers.textContent = "";
}

function viewScores() {
  //window.location.href = "highscores.html";
}
//Game Start button
startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", viewScores);
