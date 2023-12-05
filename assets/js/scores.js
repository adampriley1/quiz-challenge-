
var highScoreList = document.querySelector("#highscores");

//Get the player's score from local storage

function displayHighScore() {

    const newScore = {
        //get initials from user input and player score
        initial: localStorage.getItem ("playerInitials"),
        score: localStorage.getItem ("playerScore"),
    }
    console.log (newScore.initial);
    console.log (newScore.score)

    highScoreList.textContent = "test123";
}

displayHighScore()
//add score to new object//

//push the users score to highScoreList
// highScoreList.push(newScore); 

//display highScoreList in html








// - Retrieve highscores from local storage
// - sort the scores from higher score to lower score
// - Display the highscores as a list in highscore.html
// // - When the user click on "Clear Highscores", clear local storage
