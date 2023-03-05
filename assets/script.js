var startButton = document.getElementById("start");
var questionsDiv = document.getElementById("questions");
var timeStarter = document.getElementById("time");
var submitButton = document.getElementById("submit");
var mainquestions = document.getElementById("mainquestions");
var answers = document.getElementById("answers");
var name = document.getElementById("initials");
var totalScore = document.getElementById("total-score");
var correctAns = 0;

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

var timeLeft = 10;
function startQuiz() {
  // hide start screen
  var startPage = document.getElementById("start-page");
  startPage.setAttribute("class", "hide");

  questionsDiv.setAttribute("class", "start");

  timerId = setInterval(function () {
    timeLeft--;
    timeStarter.textContent = timeLeft;

    if (timeLeft <= 0) {
      finishedQuiz();
    }
  }, 1000);

  timeStarter.textContent = timeLeft;
  // console.log(timeLeft);

  getMyQuestion(0);
}

//questionIndex = 0;
function getMyQuestion(questionIndex) {
  var currentQuestion = myQuestions[questionIndex];

  mainquestions.textContent = currentQuestion.question;

  //answers.textContent = "";
  for (var i = 0; i < currentQuestion.qanswers.length; i++) {
    var answer = currentQuestion.qanswers[i];
    var answerButton = document.createElement("button");
    answerButton.setAttribute("value", answer);
    answerButton.setAttribute("style", "padding:8px; margin:8px");
    answerButton.textContent = answer;
    answers.appendChild(answerButton);
  }
}

// for (var i = 0; i < myQuestions.length; i++) {
//   var answer = currentQuestion.qanswers[i];
//   //answers.textContent = answer;
//   answers.innerHTML =
//     "<button>" +
//     currentQuestion.qanswers[0] +
//     "</button> <button>" +
//     currentQuestion.qanswers[1] +
//     "</button><button>" +
//     currentQuestion.qanswers[2] +
//     "</button> <button>" +
//     currentQuestion.qanswers[3] +
//     "</button>";

function answerSelect() {
  // console.log("inside answer ");
}

function finishedQuiz() {
  // totalScore.textContent = 10;
  clearInterval(timerId);
  var lastPage = document.getElementById("lastPage");
  lastPage.setAttribute("class", "start");
  mainquestions.textContent = "";
  answers.textContent = "";
}

function viewScores() {
  window.open("highScore.html");
  // window.location.href = "highscores.html";

  //showing next page high score page
  //var intials = name.value ;
  //
}
//Game Start button
startButton.addEventListener("click", startQuiz);

//selecting Answers
answers.addEventListener("click", answerSelect);

//Last page adding initials and click submit it will take you high score page
submitButton.addEventListener("click", viewScores);

//click on answerSelect will check value is correct or not
//pass a message answer is wrong or correct
//when it is wrong reduce 15sec from time
//count the correct answer and display the sum as final score
//save the sum in local storage make it stringify
//when you enter initials in texbox press button it wll take you highscore page and shows all highscores in <li>
