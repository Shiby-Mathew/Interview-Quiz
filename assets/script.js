var startButton = document.getElementById("start");
var questionsDiv = document.getElementById("questions");
var timeStarter = document.getElementById("time");
var submitButton = document.getElementById("submit");
var mainquestions = document.getElementById("mainquestions");
var answers = document.getElementById("answers");

var myQuestions = [
  {
    question: "what is your name?",
    qanswers: ["Shiby", "Mathew", "Shiny", "Liz"],
    correct: "Shiby",
  },
  {
    question: "Where do you live?",
    qanswers: ["Sydney", "Melbourne", "Queensland", "Other"],
    correct: "Sydney",
  },
  {
    question: "what is your name?",
    qanswers: ["Shiby", "Mathew", "Shiny", "Liz"],
    correct: "Shiby",
  },
  {
    question: "Where do you live?",
    qanswers: ["Sydney", "Melbourne", "Queensland", "Other"],
    correct: "Sydney",
  },
];
function startGame(event) {
  startQuiz();
}

var timeLeft = 5;
function startQuiz() {
  // hide start screen
  var startPage = document.getElementById("start-page");
  startPage.setAttribute("class", "hide");

  questionsDiv.setAttribute("class", start);

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

  answers.textContent = "";
  for (var i = 0; i < currentQuestion.qanswers.length; i++) {
    var answer = currentQuestion.qanswers[i];
    var answerButton = document.createElement("button");
    answerButton.setAttribute("value", answer);

    answerButton.textContent = answer;
    answers.appendChild(answerButton);
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
  // }
}

function answerSelect() {
  // console.log("inside answer ");
}

function finishedQuiz() {
  clearInterval(timerId);
  var lastPage = document.getElementById("lastPage");
  lastPage.setAttribute("class", "start");
  mainquestions.textContent = "";
  answers.textContent = "";
}

function viewScores() {
  initials;
  //showing next page high score page
}

startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", viewScores);
answers.addEventListener("click", answerSelect);

//when yu click the button a timer will start
//when you click on the button question will appear
// when you select options it will say correct or not
//go to next question untill the array finishes
//last page for enter your initials and save that will link to highscore page
