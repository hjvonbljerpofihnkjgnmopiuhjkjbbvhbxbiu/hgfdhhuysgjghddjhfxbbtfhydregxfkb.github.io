var player1Name, player2Name;
var currentPlayer = 1;
var randomOptionEnabled = true;

function toggleRandomOption() {
  randomOptionEnabled = !document.getElementById("randomOption").checked;
  clearRandomNumber();
}
//Debut
function startGame() {
  player1Name = document.getElementById("player1").value;
  player2Name = document.getElementById("player2").value;

  document.getElementById("player-names").style.display = "none";
  document.getElementById("container").style.display = "none";
  document.getElementById("game-frame").style.display = "block";
  hideButton();
  document.getElementById("player-turn").textContent = "C'est à  " + player1Name;
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
  
// Action
function getRandomAction() {
  var phrases = [
"Détend-toi, ton / ta partenaire doit te faire un massage sensuel (Durée indéterminer)",
"Ton / ta partenaire peut prendre un bout de papier et peut marquer ce qu'il veut dessus avant de le glisser dans le vêtement de son choix.",
"Verse de l'alcool (Ou autre liquide) sur la poitrine et le ventre de ton / ta partenaire puis lèche le.",
"Embrasse la personne devant toi.",
"Finis toutes tes phrases par le mot 'sexy' pendant deux tours.",
"Fais un suçon à ton / ta partenaire.",
"Caresse toi sensuellement.",
"Raconte une blague. Il faut qu'elle soit drôle.",
"Garde les mains sur ta tete pendant deux tours.",
"Enleve un vêtement de ton / ta partenaire avec tes dents.",
"Mord l'oreille de ton / ta partenaire.",
"Fais un streap-tease sous-vêtement ou pas c'est a toi de choisir.",
"Mes un fesser à ton / ta partenaire.",
"Tu dois enlever un vêtement.",
"Tu n'a pas le droit de prononcer les mot oui/non pendant trois tours, Sinon ton / ta partenaire choisi ton gage.",
"Imite un animal choisi par ton / ta partenaire.",
"Fais un massage à ton / ta partenaire pendant deux tours.",
"Embrasse ton / ta partenaire pendant 30 secondes.",
"Tu dois lecher la joue de ton / ta partenaire.",
"Tu dois de mettre a nu devant ton / ta partenaire.",
"Tu dois réaliser l'envie de ton / ta partenaire maintenant quoi que ce soit.",
"La partie s'arrête si l'un de vous deux à une envie de l'autre sinon un gage.",
"Fais une fausse proposition en mariage la plus convaincante à ton / ta partenaire.", 
"Embrasse langoureusement ton / ta partenaire.",
"Tu dois offrir tes services de masseur / masseuse à ton / ta partenaire.",
"Tu deviens scénariste de film pour adulte, imagine le pire scénario et raconte-le.",
"Enleve deux vêtements.",
"Un peu d'amour, fait un gros câlin a ton / ta partenaire.",
"Embrasse le cou de ton / ta partenaire dix fois et jamais au même endroit.",
"Tu dois donner les pires défauts de ton / ta partenaire.",
"Donne toi en spectacle et sois le plus romantique et la plus sensuel pour embrasser ton / ta partenaire.",
"Tu dois provoquer un frisson a ton / ta partenaire avec une seule main si tun'y arrive âs tu as un gage.",
"Met toi à califourchon sur ton / ta partenaire et lèche lui sensuellement son cou.",
"Chifoumi celui qui perd doit sucer ou lècher l'autre."
  ];
  var randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}
// Question
function getRandomPhrase() {
  var phrases = [
"As-tu déjà dragué ou envisagé d'avoir une relation sexuelle avec un trans sans savoir que s'en était un ?",
"As-tu déjà fait l'amour dans l'eau ?",
"Quelle est la personne avec laquelle tu as eu le plus de plaisir sexuel ?",
"Quel est ton objet sexuel préféré ?",
"As-tu déjà surpris quelqu'un pendant qu'il se masturbait ?",
"Quel était le titre du dernier porno que tu as vu ?",
"Quel est le film porno le plus étrange que tu as vu ?",
"Tu préfères faire l'amour sous une tente dans une forêt bercé par les bruits de la nature ou dans le lit King Size d'un 5 étoiles ?",
"Qu'est-ce que tu préfères le rapport anal, oral ou vaginal ?",
"As-tu déjà embrassé un(e) cousin(e) ?",
"As-tu déjà flirté avec le / la partenaire d'un(e) ami(e) ?",
"As-tu déjà largué quelqu'un parce qu'il avait pris beaucoup de poids ?",
"Quelle est la partie de ton corps que tu aimes le plus ?",
"Quelle est la partie la plus érotique du corps de ton / ta partenaire ?",
"Tu préfères être au-dessus ou en dessous quand tu fais l'amour ?",
"Quelle partie du corps préfères-tu chez les personnes du même sexe que toi ?",
"Es-tu déjà sortie avec plusieurs personnes en même temps ?",
"Quelle est la chose la plus cochonne que tu aies faite ?",
"As-tu déjà vu les parties intimes de ton père ?",
"As-tu déjà fait l'amour en plein air (si oui où?) ?",
"Es-tu plutôt \"peine à jouir\" ou trop précoce ?",
"Quel était ton pire baiser ?",
"Quelle est la position sexuelle la plus acrobatique que tu sais faire ?",
"Quelle est la chose la plus embarrassante qui t'est arrivée pendant l'acte ?",
"Qui a été ton pire coup au lit ?",
"Quelle est ta zone érogène la plus sensible ?",
"Si tu pouvais changer de sexe pour 24h, que ferais-tu ?",
"Si tu étais obligé tu préfere faire un plan à quatre ou une orgie ?",
"Quelle tenue t'excite le plus ?",
"Quelle est la position que tu détestes mais que tu as fait pour ton / ta partenaire ?",
"Dans quel endroit original aimerais-tu faire l'amour ?",
"Où préfères tu qu'on te caresse ?",
"As-tu déjà eu une relation sexuelle avec une personne rencontrée sur un site de rencontre ?",
"Quelle est la plus grande différence d'âge avec qui tu as couché ?",
"Qu'elle est ton plus grand fantasme ?",
"As-tu déjà vu les parties intimes de ta mère ?",
"Es-tu déjà sortie avec plusieurs personnes en même temps ?",
"Tu préfères faire l'amour avec ou sans musique ?",
"Si tu étais adepte des pratiques sado-maso, quel serait ton supplice le plus excitant ?",
"Qu'elle est la partie la plus excitante de ton / ta partenaire ?",
"Qui a été ton pire coup au lit ?",
"Es-tu déjà tombé sur une femme fontaine ? As-tu aimé ? :-)",
"As-tu déjà eu un orgasme dans l'eau ?",
"Qui est la personne la plus jeune avec qui tu as couché ? Qu'elle âge avez-tu et qu'elle âge avait-elle quand vous avez couché ensemble ?",
"Raconte une hisoire marrante sur l'un de tes ex.",
"Oû aimerais tu faire l'amour et tu ne l'as pas encore fais?",
"As-tu déjà fait des choses que tu regrettes lorsque tu étais bourré ? Si oui, raconte.",
"Quelle est ta plus grosse anecdote de poissard ?",
"Invente ou non une anecdoteque tu aurais pu vivre ton adversaire doit deviner si elle est vrai ou faux.",
"Si ta maison brule, quel sont les 4 objets que tu prends ?"
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
    var message = playerName + " doit prendre " + randomNumber + " gorgé(s).";
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
