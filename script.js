var player1Name, player2Name;
var currentPlayer = 1;
var randomOptionEnabled = false;

function toggleRandomOption() {
  randomOptionEnabled = !randomOptionEnabled;
}

function startGame() {
  player1Name = document.getElementById("player1").value;
  player2Name = document.getElementById("player2").value;

  document.getElementById("player-names").style.display = "none";
  document.getElementById("game-frame").style.display = "block";
  document.getElementById("player-turn").textContent = "Turn: " + player1Name;
}

function getRandomNumber() {
  if (randomOptionEnabled) {
    return Math.floor(Math.random() * 4); // Generates a random number between 0 and 3
  } else {
    return "";
  }
}

function poseQuestion() {
  var phrase = getRandomPhrase();
  displayQuestion(phrase);
  clearRandomNumber();
}

function requestAction() {
  var phrase = getRandomPhrase();
  displayAction(phrase);
  clearRandomNumber();
}

function displayRandomNumber(playerName) {
  var randomNumber = getRandomNumber();
  var message = playerName + " doit prendre " + randomNumber;
  document.getElementById("randomNumberMessage").textContent = message;
}

function clearRandomNumber() {
  document.getElementById("randomNumberMessage").textContent = "";
}

function skipProposition() {
  var currentPlayerName = currentPlayer === 1 ? player1Name : player2Name;
  displayRandomNumber(currentPlayerName);
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("player-turn").textContent = "Turn: " + (currentPlayer === 1 ? player1Name : player2Name);
}
