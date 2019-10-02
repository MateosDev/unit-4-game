var objectivePoints = 0;
var playerPoints = 0;
var wins = 0;
var losses = 0;
var heartCardValue = 0;
var spadeCardValue = 0;
var diamondCardValue = 0;
var clubCardValue = 0;
var jokerCardValue = 0;

function setObjectivePointsContainer() {
  $("#objective-points-container").text(objectivePoints);
}

function setRecordsContainer() {
  $("#records-container").text("Wins: " + wins + " Losses: " + losses);
}

function setPointsContainer() {
  $("#points-container").text("Points " + playerPoints);
}

function selectNewObjectivePoints() {
  var randomNumber = Math.floor(Math.random() * 101) + 19;
  objectivePoints = randomNumber;
  setObjectivePointsContainer();
}

function selectNewCardValues() {
  heartCardValue = Math.floor(Math.random() * 12) + 1;
  spadeCardValue = Math.floor(Math.random() * 12) + 1;
  diamondCardValue = Math.floor(Math.random() * 12) + 1;
  clubCardValue = Math.floor(Math.random() * 12) + 1;
  jokerCardValue = Math.floor(Math.random() * 12) + 1;
  console.log(
    heartCardValue +
      " " +
      spadeCardValue +
      " " +
      diamondCardValue +
      " " +
      clubCardValue +
      " " +
      jokerCardValue
  );
}

function addPoints(n) {
  playerPoints += n;
  setPointsContainer();

  if (playerPoints == objectivePoints) {
    wins++;
    setRecordsContainer();
    playerPoints = 0;
    selectNewObjectivePoints();
    selectNewCardValues();
  }

  if (playerPoints > objectivePoints) {
    losses++;
    setRecordsContainer();
    playerPoints = 0;
    setPointsContainer();
    selectNewObjectivePoints();
    selectNewCardValues();
  }
}

$("#heart-card").click(function() {
  addPoints(heartCardValue);
});

$("#spade-card").click(function() {
  addPoints(spadeCardValue);
});

$("#diamond-card").click(function() {
  addPoints(diamondCardValue);
});

$("#club-card").click(function() {
  addPoints(clubCardValue);
});

$("#joker-card").click(function() {
  addPoints(jokerCardValue);
});

selectNewObjectivePoints();
selectNewCardValues();
