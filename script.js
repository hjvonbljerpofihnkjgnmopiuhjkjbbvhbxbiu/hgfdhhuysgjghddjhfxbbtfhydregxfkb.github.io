var player1Name, player2Name;
var currentPlayer = 1;
var randomOptionEnabled = true;

function toggleRandomOption() {
  randomOptionEnabled = !randomOptionEnabled;
  clearRandomNumber();
}
//Debut
function startGame() {
  player1Name = document.getElementById("player1").value;
  player2Name = document.getElementById("player2").value;

  document.getElementById("player-names").style.display = "none";
  document.getElementById("game-frame").style.display = "block";
 hideButton();
  document.getElementById("player-turn").textContent = "Turn: " + player1Name;
}
// Affiche les deux boutons Pass et skip
function showButton() {
  document.getElementById("SkipPassButton").style.display = "block";
}
// Enleve les deux boutons Pass et skip
function hideButton() {
  document.getElementById("SkipPassButton").style.display = "none";
}

// Affiche les deux boutons Question et action
function showbisButton() {
  document.getElementById("ActQueButtons").style.display = "block";
}
// Enleve les deux boutons question et action
function hidebisButton() {
  document.getElementById("ActQueButtons").style.display = "none";
}
  
// Question
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
// Action
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
// Affichage question
function displayQuestion(phrase) {
  document.getElementById("questionText").textContent = "Question: " + phrase;
  document.getElementById("actionText").textContent = "";
}
//Affichage reponse
function displayAction(phrase) {
  document.getElementById("questionText").textContent = "";
  document.getElementById("actionText").textContent = "Action: " + phrase;
}
// Génération du nombre
function getRandomNumber() {
  if (randomOptionEnabled) {
    return Math.floor(Math.random() * 4);
console.log('Nombre générer'); // Generates a random number between 0 and 3
  } else {
console.log('Nombre non générer');
    return "";
  }
}
// Execution des question
function poseQuestion() {
  var phrase = getRandomPhrase();
 showButton();
hidebisButton();
  displayQuestion(phrase);
  clearRandomNumber();
}
// Execution des action
function requestAction() {
  var phrase = getRandomAction();
 showButton();
  hidebisButton();
  displayAction(phrase);
  clearRandomNumber();
}
// Affichage du nombre de gorgé
function displayRandomNumber(playerName) {
  if (randomOptionEnabled) {
    var randomNumber = getRandomNumber();
    var message = playerName + " doit prendre " + randomNumber;
    document.getElementById("randomNumberMessage").textContent = message;
  }
}
// Enleve le nombre de gorgé
function clearRandomNumber() {
  document.getElementById("randomNumberMessage").textContent = "";
}
// Skip la question/action 
function skipProposition() {
  var currentPlayerName = currentPlayer === 1 ? player1Name : player2Name;
  document.getElementById("actionText").textContent = "";
document.getElementById("questionText").textContent = "";
 hideButton();
  showbisButton();
  if (randomOptionEnabled) {
    displayRandomNumber(currentPlayerName);
  }
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("player-turn").textContent = "Turn: " + (currentPlayer === 1 ? player1Name : player2Name);
}
// Passe la question/action
function passProposition() {
  var currentPlayerName = currentPlayer === 1 ? player1Name : player2Name;
  document.getElementById("actionText").textContent = "";
document.getElementById("questionText").textContent = "";
   hideButton();
    showbisButton();
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("player-turn").textContent = "Turn: " + (currentPlayer === 1 ? player1Name : player2Name);
}
