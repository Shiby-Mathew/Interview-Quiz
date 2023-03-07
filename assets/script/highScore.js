var listEl = document.querySelector("#highScore");
var olEl = document.querySelector("#list");

var clearButton = document.getElementById("clear");
var scoreArray = [];

function showScores() {
  var totalScores = JSON.parse(localStorage.getItem("totalScores")) || [];
  for (var i = 0; i < totalScores.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent =
      totalScores[i].initialName.toUpperCase() +
      "   -- " +
      totalScores[i].totalScore;
    olEl.appendChild(liEl);
    listEl.appendChild(olEl);
    console.log("from local storage");
    //listEl.appendChild(olEl);
  }
}
clearButton.addEventListener("click", function () {
  localStorage.clear("totalScores");
  location.reload();
});

showScores();
