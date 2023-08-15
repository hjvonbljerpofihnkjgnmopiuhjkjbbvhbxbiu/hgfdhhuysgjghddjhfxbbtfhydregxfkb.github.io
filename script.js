var player1Name, player2Name;
var currentPlayer = 1;
var randomOptionEnabled = true;

function toggleRandomOption() {
  randomOptionEnabled = !randomOptionEnabled;
  clearRandomNumber();
}

function startGame() {
  player1Name = document.getElementById("player1").value;
  player2Name = document.getElementById("player2").value;

  document.getElementById("player-names").style.display = "none";
  document.getElementById("game-frame").style.display = "block";
  document.getElementById("player-turn").textContent = "Turn: " + player1Name;
}

function getRandomPhrase() {
  var phrases = [
    "What is your favorite color?",
    "Describe your dream vacation.",
    "If you could have any superpower, what would it be?"
    // Add more phrases here
  ];
  var randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

function getRandomAction() {
  var phrases = [
    "NNO",
    "YREs",
    "hgfk"
    // Add more phrases here
  ];
  var randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

function displayQuestion(phrase) {
  document.getElementById("questionText").textContent = "Question: " + phrase;
  document.getElementById("actionText").textContent = "";
}

function displayAction(phrase) {
  document.getElementById("questionText").textContent = "";
  document.getElementById("actionText").textContent = "Action: " + phrase;
}

function getRandomNumber() {
  if (randomOptionEnabled) {
    return Math.floor(Math.random() * 4);
console.log('Nombre générer'); // Generates a random number between 0 and 3
  } else {
console.log('Nombre non générer');
    return "";
  }
}

function poseQuestion() {
  var phrase = getRandomPhrase();
  displayQuestion(phrase);
  clearRandomNumber();
}

function requestAction() {
  var phrase = getRandomAction();
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
  document.getElementById("actionText").textContent = "";
document.getElementById("questionText").textContent = "";
  if (randomOptionEnabled) {
    displayRandomNumber(currentPlayerName);
  }
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("player-turn").textContent = "Turn: " + (currentPlayer === 1 ? player1Name : player2Name);
}

