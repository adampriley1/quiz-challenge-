var startBtn = document.querySelector("#start");
var timerDisplay = document.querySelector("#time");
var timer = 50;
var timerCountdown = "";
var optionsList = document.querySelector(".choices");
var quizQuestion = document.querySelector("#question-title");
var questionScreen = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");
var playerFeedback = document.querySelector("#feedback");
var endScreen = document.querySelector("#end-screen");
var scoreResult = document.querySelector("#final-score");
var submitButton = document.querySelector("#submit");


//function to clear question choices
function clearChoices() {
  document.querySelector(".choices").innerHTML = "";
}

// function to check timer is still positive
function checkTimer() {
  if (timer < 1) {
    playerFeedback.innerText = "Game Over!";
    endGame();
  }
}

//start quiz button event listner
startBtn.addEventListener("click", function (event) {
  event.preventDefault();

  //function to countdown time (from 50) when "start quiz" button is pressed
  timerCountdown = setInterval(function () {
    timer -= 1;
    if (timer <=0) {
      endGame()
      ;
    }
      timerDisplay.innerText = timer;
    
  }, 1000);

  //unhide feedback section
  playerFeedback.classList.remove("hide");

  //hide start screen
  startScreen.classList.replace("start", "hide");

  // unhide questions screen
  questionScreen.classList.remove("hide");

  //display 1st question

  quizQuestion.innerText = question1.question;

  //show answer options
  renderQuestion1();
});
//functions to render questions - make this into 1 simple function??//

//function to render question 1
function renderQuestion1() {
  // Render a new li for each question
  for (var i = 0; i < question1.options.length; i++) {
    var questionOptions = question1.options[i];

    //var li = document.createElement("li");
    var button = document.createElement("button");
    button.textContent = questionOptions;
    optionsList.appendChild(button);

    button.addEventListener("click", function (event) {
      event.preventDefault();

      // Correct answer logic. if correct button pressed...
      if (timer > 0 && event.target.textContent === question1.answer) {
        playerFeedback.innerText = "Correct!";
        clearChoices();
        quizQuestion.innerText = question2.question;
        questionOptions = renderQuestion2();
      }

      if (timer > 10 && event.target.textContent !== question1.answer) {
        playerFeedback.innerText = "Incorrect!";
        clearChoices();
        timer = timer - 10;
        quizQuestion.innerText = question2.question;
        questionOptions = renderQuestion2();

        // Check timer is still positive
      } else {
        checkTimer();
      }
    });
  }
}

//function to render question 2
function renderQuestion2() {
  for (var i = 0; i < question2.options.length; i++) {
    var questionOptions = question2.options[i];

    var button = document.createElement("button");
    button.textContent = questionOptions;
    optionsList.appendChild(button);

    button.addEventListener("click", function (event) {
      event.preventDefault();

      if (timer > 0 && event.target.textContent === question2.answer) {
        playerFeedback.innerText = "Correct!";
        clearChoices();
        quizQuestion.innerText = question3.question;
        questionOptions = renderQuestion3();
      }

      if (timer > 10 && event.target.textContent !== question2.answer) {
        playerFeedback.innerText = "Incorrect!";
        clearChoices();
        timer = timer - 10;
        quizQuestion.innerText = question3.question;
        questionOptions = renderQuestion3();
      } else {
        checkTimer();
      }
    });
  }
}
//function to render question 3
function renderQuestion3() {
  // Render a new li for each question
  for (var i = 0; i < question3.options.length; i++) {
    var questionOptions = question3.options[i];

    var button = document.createElement("button");
    button.textContent = questionOptions;
    optionsList.appendChild(button);

    button.addEventListener("click", function (event) {
      event.preventDefault();

      if (timer > 0 && event.target.textContent === question3.answer) {
        playerFeedback.innerText = "Correct!";
        clearChoices();
        quizQuestion.innerText = question4.question;
        questionOptions = renderQuestion4();
      }

      if (timer > 10 && event.target.textContent !== question3.answer) {
        playerFeedback.innerText = "Incorrect!";
        clearChoices();
        timer = timer - 10;
        quizQuestion.innerText = question4.question;
        questionOptions = renderQuestion4();
      } else {
        checkTimer();
      }
    });
  }
}
//function to render question 4
function renderQuestion4() {
  for (var i = 0; i < question4.options.length; i++) {
    var questionOptions = question4.options[i];

    var button = document.createElement("button");
    button.textContent = questionOptions;
    optionsList.appendChild(button);

    button.addEventListener("click", function (event) {
      event.preventDefault();

      if (timer > 0 && event.target.textContent === question4.answer) {
        feedback.innerText = "Correct!";
        clearChoices();
        quizQuestion.innerText = question5.question;
        questionOptions = renderQuestion5();
      }

      if (timer > 10 && event.target.textContent !== question4.answer) {
        playerFeedback.innerText = "Incorrect!";
        clearChoices();
        timer = timer - 10;
        quizQuestion.innerText = question5.question;
        questionOptions = renderQuestion5();
      } else {
        checkTimer();
      }
    });
  }
}

//function to render question 5
function renderQuestion5() {
  for (var i = 0; i < question5.options.length; i++) {
    var questionOptions = question5.options[i];

    var button = document.createElement("button");
    button.textContent = questionOptions;
    optionsList.appendChild(button);

    button.addEventListener("click", function (event) {
      event.preventDefault();

      if (timer > 0 && event.target.textContent === question5.answer) {
        playerFeedback.innerText = "Correct!";
        clearChoices();
        quizQuestion.innerText = "";
        endGame();
      }

      if (timer > 10 && event.target.textContent !== question5.answer) {
        playerFeedback.innerText = "Incorrect!";
        timer = timer - 10;
        quizQuestion.innerText = "";
        checkTimer();
        endGame();
      }
    });
  }
}
function endGame() {

  //stop timer and display score to user
  clearInterval(timerCountdown);
  scoreResult.innerText = timer;
  timerDisplay.innerText = timer;
  //save score in local storage
  localStorage.setItem("playerScore",JSON.stringify (timer));

  // hide questions div
  questionScreen.classList.add("hide");
  //show end screen div
  endScreen.classList.remove("hide");

}

function saveInitials() {
    var usersInitials = document.getElementById('initials').value
    localStorage.setItem("playerInitials", usersInitials);
}

//when submit button pressed, run displayhighscore function
submitButton.addEventListener("click", saveInitials)

// When submit button pressed, run saveInitials function
submitButton.addEventListener("click", saveInitials);




