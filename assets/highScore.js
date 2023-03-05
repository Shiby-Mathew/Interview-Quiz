function showScores() {
  var scoreInfo = JSON.parse(window.localStorage.getItem("scoreInfo"));
  console.log(scoreInfo);
}

//store finalscore in local storage

//retrieve values from JSON.parse()
var clearButton = document.getElementById("clear");

showScores();
