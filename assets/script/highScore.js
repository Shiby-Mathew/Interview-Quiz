var listEl = document.querySelector("#highScore");
var olEl = document.querySelector("#list");
var clearButton = document.getElementById("clear");
var scoreArray = [];

//Display localStorage values
function showScores() {
  var totalScores = JSON.parse(localStorage.getItem("totalScores")) || [];

  totalScores.sort((a, b) => b.totalScore - a.totalScore);

  for (var i = 0; i < totalScores.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent =
      totalScores[i].initialName.toUpperCase() +
      "   -- " +
      totalScores[i].totalScore;
    olEl.appendChild(liEl);
    listEl.appendChild(olEl);
  }
}

//Clear the localstorge values
clearButton.addEventListener("click", function () {
  localStorage.clear("totalScores");
  location.reload();
});

showScores();
