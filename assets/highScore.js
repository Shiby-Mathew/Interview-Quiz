var listEl = document.querySelector("#highscores");
var clearButton = document.getElementById("clear");

function showScores() {
  var totalScores =
    JSON.parse(window.localStorage.getItem("totalScores")) || [];
  for (var i = 0; i < totalScores.length; i++) {
    var liEl = document.createElement("li");
    liEl.setAttribute("style", "text-align:center");
    liEl.textContent =
      totalScores[i].initialName + " - " + totalScores[i].totalScore;

    listEl.appendChild(liEl);
  }

  //   var scoreInfo = JSON.parse(window.localStorage.getItem("scoreInfo"));
  //   scoreArray =push(scoreInfo);

  //   console.log(scoreInfo.initialName);

  //   var li1 = document.createElement("li");
  //   li1.textContent =
  //     "Initials : " + scoreInfo.initialName + " - Score: " + scoreInfo.totalScore;
  //   console.log("display");
  //
}

showScores();
