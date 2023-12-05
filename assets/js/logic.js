var startBtn = document.querySelector("#start");
var timerDisplay = document.querySelector("#time");
var timer = 50;
var optionsList = document.querySelector(".choices");

//start quiz button event listner

startBtn.addEventListener("click", function (event) {
  event.preventDefault();

  //function to countdown time (from 50) when "start quiz" button is pressed

  var timerCountdown = setInterval(function () {
    timer = timer - 1;
    if (timer === 0) {
      playerfeedback.innerText = "Game Over!";
      clearInterval(timerCountdown);
    } else {
      timerDisplay.innerText = timer;
    }
  }, 1000);

  //unhide feedback section
  var playerfeedback = document.querySelector("#feedback");
  playerfeedback.classList.replace("hide", "start");

  //hide start screen
  var startScreen = document.querySelector("#start-screen");
  startScreen.classList.replace("start", "hide");

  // unhide questions screen
  var questionScreen = document.querySelector("#questions");
  questionScreen.classList.replace("hide", "start");

  //display 1st question
  var quizQuestion1 = document.querySelector("#question-title");
  quizQuestion1.innerText = question1.question;

  //show answer options

  
  renderQuestion1();
});

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
              if (event.target.textContent === question1.answer) {
                feedback.innerText = "Correct!";
                optionsList.innerText = renderQuestion2();
              } else {
                feedback.innerText = "Incorrect!";
                timer = timer - 10;
        
                // Check timer is still positive
                if (timer > 0) {
                  optionsList.innerText = renderQuestion2();
                } else {
                  // End the game and save score
                }
              }
            });
          }
        }
  

//function to render question 2
function renderQuestion2() {
    // Render a new li for each question
    for (var i = 0; i < question2.options.length; i++) {
      var questionOptions = question2.options[i];

      //var li = document.createElement("li");
      var button = document.createElement("button");
      button.textContent = questionOptions;
      optionsList.appendChild(button);

      button.addEventListener("click", function (event) {
        event.preventDefault();
        
              // Correct answer logic. if correct button pressed...
              if (event.target.textContent === question2.answer) {
                feedback.innerText = "Correct!";
                optionsList.innerText = renderQuestion3();
              } else {
                feedback.innerText = "Incorrect!";
                timer = timer - 10;
        
                // Check timer is still positive
                if (timer > 0) {
                  optionsList.innerText = renderQuestion3();
                } else {
                  // End the game and save score
                }
              }
            });
          }
        }
  
        //function to render question 3
function renderQuestion3() {
    // Render a new li for each question
    for (var i = 0; i < question3.options.length; i++) {
      var questionOptions = question3.options[i];

      //var li = document.createElement("li");
      var button = document.createElement("button");
      button.textContent = questionOptions;
      optionsList.appendChild(button);

      button.addEventListener("click", function (event) {
        event.preventDefault();
        
              // Correct answer logic. if correct button pressed...
              if (event.target.textContent === question3.answer) {
                feedback.innerText = "Correct!";
                optionsList.innerText = renderQuestion4();
              } else {
                feedback.innerText = "Incorrect!";
                timer = timer - 10;
        
                // Check timer is still positive
                if (timer > 0) {
                  optionsList.innerText = renderQuestion4();
                } else {
                  // End the game and save score
                }
              }
            });
          }
        }

        //function to render question 4
function renderQuestion4() {
    // Render a new li for each question
    for (var i = 0; i < question4.options.length; i++) {
      var questionOptions = question4.options[i];

      //var li = document.createElement("li");
      var button = document.createElement("button");
      button.textContent = questionOptions;
      optionsList.appendChild(button);

      button.addEventListener("click", function (event) {
        event.preventDefault();
        
              // Correct answer logic. if correct button pressed...
              if (event.target.textContent === question4.answer) {
                feedback.innerText = "Correct!";
                optionsList.innerText = renderQuestion5();
              } else {
                feedback.innerText = "Incorrect!";
                timer = timer - 10;
        
                // Check timer is still positive
                if (timer > 0) {
                  optionsList.innerText = renderQuestion5();
                } else {
                  // End the game and save score
                }
              }
            });
          }
        }

        //function to render question 5
function renderQuestion5() {
    // Render a new li for each question
    for (var i = 0; i < question5.options.length; i++) {
      var questionOptions = question5.options[i];

      //var li = document.createElement("li");
      var button = document.createElement("button");
      button.textContent = questionOptions;
      optionsList.appendChild(button);

      button.addEventListener("click", function (event) {
        event.preventDefault();
        
              // Correct answer logic. if correct button pressed...
              if (event.target.textContent === question5.answer) {
                feedback.innerText = "Correct!";
                //show finish screen
              } else {
                feedback.innerText = "Incorrect!";
                timer = timer - 10;
        
                // Check timer is still positive
                if (timer > 0) {
                //   optionsList.innerText = //Finish screen();
                } else {
                  // Finish Screen
                }
              }
            });
          }
        }




//     //Add event listener for answer button clicked by user

//     button.addEventListener("click", function (event) {
//       event.preventDefault();

//       // Correct answer logic. if correct button pressed...
//       if (event.target.textContent === question1.answer) {
//         playerfeedback.innerText = "Correct!";
//         optionsList.innerText = renderQuestion2();
//       } else {
//         playerfeedback.innerText = "Incorrect!";
//         timer = timer - 10;

//         // Check timer is still positive
//         if (timer > 0) {
//           optionsList.innerText = renderQuestion2();
//         } else {
//           // End the game and save score
//         }
//       }
//     });
//   }
// }

// * A start button that when clicked a timer starts and the first question appears.
//   * Questions contain buttons for each answer.
//   * When answer is clicked, the next question appears
//   * If the answer clicked was incorrect then subtract time from the clock
// * The quiz should end when all questions are answered or the timer reaches 0.
//   * When the game ends, it should display their score and give the user the ability to save their initials and their score

// index.html

// - Define the questions and the choices and the answers, put it in a variable in questions.js file
// - Timer -> add click event listener to "start quiz" button and trigger the timer
// - Display first question
//      add click event listener to "start quiz" button
//      display the first question based on the questions that we have defined
//      hide the start screen
//      show questions screen and populate it with questions and the choices
// - Add click event listener to the choices div and check if the choice button is clicked
//      Check if the answer is correct
//          if its correct
//              display "correct answer" in feedback div
//              hide feedback div then display next question
//          if incorrect
//              subtract the timer
//              display "wrong answer" in feedback div
//              check the timer,
//                  if timer > 0. hide feedback div then display next question
//                  if timer <= 0, hide feedback div then go display "end-screen" screen and hide question screen
// continue.....

// highscores.html
// - Retrieve highscores from local storage
// - sort the scores from higher score to lower score
// - Display the highscores as a list
// // - When the user click on "Clear Highscores", clear local storage

// // How to use audio file
// const correctAudio = new Audio('./assets/sfx/correct.wav');
// const incorrectAudio = new Audio('./assets/sfx/incorrect.wav');

// // Example to play the audio when start button is clicked
// document.getElementById('start').addEventListener('click', function() {
//     incorrectAudio.play();
// });

//function to render list of questions
// function renderQuestion1() {
//     // Render a new li for each question
//     for (var i = 0; i < question1.options.length; i++) {
//       var questionOptions = optionsList[i];

//       var li = document.createElement("li");
//       li.textContent = questionOptions;
//       optionsList.appendChild(li);

//       //create a button element for each option
//       const button = document.createElement("button");
//       button.textContent = questionOption;
//     }
// }
//***

//function to render Q1
