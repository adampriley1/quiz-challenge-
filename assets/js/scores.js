var highScoreList = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");
let scores = [];

// Get the player's score and initials from local storage

function displayHighScore() {

    const newScore = {
        //get initials from user input and player score
        initial: localStorage.getItem ("playerInitials"),
        score: localStorage.getItem ("playerScore"),
    }
    //add score and initials to the array
    scores.push(newScore);

    highScoreList.textContent = newScore.initial + " " + "-" + " " + newScore.score;
}

 

/// NOT WORKING**** need to add more scores to the array and display as ordered list.
for (let i = 0; i < scores.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = scores[i].initial + " - " + scores[i].score;
    highScoreList.appendChild(listItem);
}

displayHighScore();

//

// function displayHighScore() {
//     // Clear the highScoreList before displaying scores
//     highScoreList.innerHTML = "";


    




