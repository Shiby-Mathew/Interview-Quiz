var listEl = document.querySelector("#highScores");
var olEl = document.querySelector("#list");

var clearButton = document.getElementById("clear");
var scoreArray = [];

function showScores() {
  var totalScores =
    JSON.parse(window.localStorage.getItem("totalScores")) || [];
  for (var i = 0; i < totalScores.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent =
      totalScores[i].initialName.toUpperCase() +
      "   -- " +
      totalScores[i].totalScore;
    olEl.appendChild(liEl);
    listEl.appendChild(olEl);
    //listEl.appendChild(olEl);
  }
}
clearButton.addEventListener("click", function () {
  window.localStorage.clear("totalScores");
  window.location.reload();
});

showScores();
