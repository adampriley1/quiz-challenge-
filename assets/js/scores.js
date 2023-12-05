
const highscoresFromStorage = JSON.parse(localStorage.getItem('highscores'));

//Store Score of user
const newScore = {
    //get initials from user input
    initial: document.getElementById('initials').values,
    score: playerScore,
}
//push the users score to highscoresFromStorage
highscoresFromStorage.push(newScore); 


localStorage.setItem('highscores', JSON.stringify(highscoresFromStorage));