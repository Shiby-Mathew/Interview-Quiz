var startButton = document.getElementById("start");
var questionsDiv = document.getElementById("questions");
var timeStarter = document.getElementById("time");
var submitButton = document.getElementById("submit");
var mainquestions = document.getElementById("mainquestions");
var answers = document.getElementById("answers");
var initialInput = document.querySelector("#initials");
var totalScore = document.getElementById("total-score");
var msg = document.querySelector(".message");
var correctAns = 0;
var questionIndex = 0;

//Questions Array
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
      "Which of the following is used to read an HTML page and render it?",
    qanswers: ["Web Server", "Web Network", "Web Browser", "Web Matrix"],
    correct: "Web Browser",
  },
  {
    question: "Which element is used to get highlighted text in HTML5 ",
    qanswers: ["<u>", "<mark>", "<highlight>", "<b>"],
    correct: "<mark>",
  },
  {
    question: "Which element is used for styling HTML5 element ",
    qanswers: ["JavaScript", "PHP", "jQuery", "CSS"],
    correct: "CSS",
  },
];

var timeLeft = myQuestions.length * 15;

//Quiz  function starts here
function startQuiz() {
  var startPage = document.getElementById("start-page");
  startPage.setAttribute("class", "hide");

  questionsDiv.setAttribute("class", "start");

  // setting countdown timer
  timerId = setInterval(function () {
    timeLeft--;
    timeStarter.textContent = timeLeft + " s";

    if (timeLeft <= 0) {
      timeLeft = 0;
      finishedQuiz();
    }
  }, 1000);

  timeStarter.textContent = timeLeft + " s";
  getMyQuestion();
}

//Accessing questions and answers from myQuestions array
function getMyQuestion() {
  //checking if questions ran out or time =0 then finished the quiz
  if (questionIndex === myQuestions.length || timeLeft == 0) {
    finishedQuiz();

    return;
  }
  var currentQuestion = myQuestions[questionIndex];
  mainquestions.textContent = currentQuestion.question;
  answers.textContent = "";
  for (var i = 0; i < currentQuestion.qanswers.length; i++) {
    var answer = currentQuestion.qanswers[i];
    var answerButton = document.createElement("button");
    answerButton.setAttribute("value", answer);
    answerButton.setAttribute(
      "style",
      "padding:8px; margin:8px;font-size:16px"
    );
    answerButton.textContent = answer;
    answers.appendChild(answerButton);
    answerButton.addEventListener("click", answerSelect);
  }
}

//Selecting answers from the array and matching with selected answer
function answerSelect() {
  if (questionIndex === myQuestions.length) {
    finishedQuiz();
    return;
  }
  var selectedAns = this.value;

  if (selectedAns === myQuestions[questionIndex].correct) {
    handleCorrect();
  } else {
    handleWrong();
  }
  questionIndex++;

  getMyQuestion();
}

//Time setting for display message
function time() {
  msg.setAttribute("class", "message");

  setTimeout(function () {
    console.log("Delayed for 1 second");
    msg.setAttribute("class", "message hide");
  }, 1000);
}

//Correct answer added up 15 points and display message
function handleCorrect() {
  correctAns = correctAns + 15;
  time();

  msg.textContent = "correct";
}

//Wrong answer lose 15seconds and display message
function handleWrong() {
  timeLeft -= 15;
  time();
  msg.textContent = "incorrect";
}

//To show the final Score  end of the quiz page
function finishedQuiz() {
  totalScore.textContent = correctAns;
  clearInterval(timerId);

  var lastPage = document.getElementById("lastPage");
  lastPage.setAttribute("class", "start");
  mainquestions.textContent = "";
  answers.textContent = "";
}

// Stores the values in localStorage and display in highSore.html page
function viewScores(event) {
  event.preventDefault();
  var name = initialInput.value;

  //Checking if value is empty
  if (name.length !== 0) {
    console.log("name:" + name);
    var totalScores = JSON.parse(localStorage.getItem("totalScores")) || [];

    var scoreInfo = {
      initialName: name,
      totalScore: correctAns,
    };
    totalScores.push(scoreInfo);
    console.log(scoreInfo);
    localStorage.setItem("totalScores", JSON.stringify(totalScores));

    window.location.href = "highScore.html";
  } else {
    return;
  }
}

//Game Start button
startButton.addEventListener("click", startQuiz);

//Submit the form button
submitButton.addEventListener("click", viewScores);
