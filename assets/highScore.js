var listEl = document.querySelector("#highScores");
var clearButton = document.getElementById("clear");
var scoreArray = [];

function showScores() {
  var totalScores =
    JSON.parse(window.localStorage.getItem("totalScores")) || [];
  for (var i = 0; i < totalScores.length; i++) {
    var olEl = document.createElement("ol");
    olEl.className = "orderedList";
    var liEl = document.createElement("li");
    liEl.textContent =
      totalScores[i].initialName + " - " + totalScores[i].totalScore;
    olEl.appendChild(liEl);
    listEl.appendChild(olEl);
  }
}

showScores();
