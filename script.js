var player1Name, player2Name;
var currentPlayer = 1;

function startGame() {
  player1Name = document.getElementById("player1").value;
  player2Name = document.getElementById("player2").value;

  document.getElementById("player-names").style.display = "none";
  document.getElementById("game-frame").style.display = "block";
  document.getElementById("player-turn").textContent = "Turn: " + player1Name;
}

function poseQuestion() {
  // Add your code to pose a question here
  console.log("Pose question");
}

function requestAction() {
  // Add your code to request an action here
  console.log("Request action");
}

function skipProposition() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("player-turn").textContent = "Turn: " + (currentPlayer === 1 ? player1Name : player2Name);
}
