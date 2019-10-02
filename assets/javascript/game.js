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
    var randomNumber = Math.floor(Math.random()*101)+19;
    objectivePoints = randomNumber;
    setObjectivePointsContainer();
}

function selectNewStoneValues() {
    mindStoneValue = Math.floor(Math.random()*12)+1;
    powerStoneValue = Math.floor(Math.random()*12)+1;
    realityStoneValue = Math.floor(Math.random()*12)+1;
    soulStoneValue = Math.floor(Math.random()*12)+1;
    spaceStoneValue = Math.floor(Math.random()*12)+1;
    console.log(mindStoneValue + " " + powerStoneValue + " " + realityStoneValue + " " + soulStoneValue + " " + spaceStoneValue + " " + timeStoneValue);
}

function addPoints(n) {
    playerPoints += n;
    setPointsContainer();

    if(playerPoints == objectivePoints) {
        wins++;
        setRecordsContainer();
        playerPoints = 0;
        selectNewObjectivePoints();
    selectNewStoneValues();
    }

    if(playerPoints > objectivePoints) {
        losses++;
        setRecordsContainer();
        playerPoints = 0;
        setPointsContainer();
        selectNewObjectivePoints();
        selectNewStoneValues();
    }
}

$("#mind-stone").click(function(){
    addPoints(mindStoneValue);
});

$("#power-stone").click(function(){
    addPoints(powerStoneValue);
});

$("#reality-stone").click(function(){
    addPoints(realityStoneValue);
});

$("#soul-stone").click(function(){
    addPoints(soulStoneValue);
});

$("#space-stone").click(function(){
    addPoints(spaceStoneValue);
});

$("#time-stone").click(function(){
    addPoints(timeStoneValue);
});

selectNewObjectivePoints();
selectNewStoneValues();