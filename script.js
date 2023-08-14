var player1Name, player2Name;
var currentPlayer = 1;

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

function displayQuestion(phrase) {
  document.getElementById("questionText").textContent = "Question: " + phrase;
  document.getElementById("actionText").textContent = "";
}

function displayAction(phrase) {
  document.getElementById("questionText").textContent = "";
  document.getElementById("actionText").textContent = "Action: " + phrase;
}

function clearPhrases() {
  document.getElementById("questionText").textContent = "";
  document.getElementById("actionText").textContent = "";
}

function poseQuestion() {
  var phrase = getRandomPhrase();
  displayQuestion(phrase);
}

function requestAction() {
  var phrase = getRandomPhrase();
  displayAction(phrase);
}

function skipProposition() {
  clearPhrases();
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("player-turn").textContent = "Turn: " + (currentPlayer === 1 ? player1Name : player2Name);
}
