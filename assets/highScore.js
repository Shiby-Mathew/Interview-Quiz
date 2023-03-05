var listEl = document.querySelector("#highscores");

function showScores() {
  var scoreInfo = JSON.parse(window.localStorage.getItem("scoreInfo"));
  console.log(scoreInfo.initialName);

  var li1 = document.createElement("li");
  li1.textContent =
    "Initials : " + scoreInfo.initialName + " - Score: " + scoreInfo.totalScore;
  console.log("display");
  listEl.appendChild(li1);
}

//store finalscore in local storage

//retrieve values from JSON.parse()
var clearButton = document.getElementById("clear");

showScores();
