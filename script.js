//this is the driving directiosn for the array
// var choices = document.querySelector("#choices");

//for loop to loop through possible answers and create a button each one
//create element (method to do ln 73)
//add text content
//on click button javascript 
//attached to on click function to check answers
//append html
// var displayQuestion = document.createElementById;

var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");
var timerInterval;
var secondsLeft = 10;



var quizArray = [
    {
        question: "1.What is....",
        possibleAnswers: ["A", "B", "C", "D"],
        correctAnswer: "A"
    },
    {
        question: "2.What is....",
        possibleAnswers: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "3.What is....",
        possibleAnswers: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "4.What is....",
        possibleAnswers: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "5.What is....",
        possibleAnswers: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
]
var questionNumber = 0;
// Define variables to keep track of quiz state
var currentQuestionIndex = 0;
var score = 0;

// Define a function to display the current question
function displayCurrentQuestion() {
    // Get the current question object


    // Display the question text
    document.getElementById("question").textContent = quizArray[currentQuestionIndex].question;
    // Display the possible answers
    var answerElements = document.getElementsByClassName("possibleAnswers");
    for (var i = 0; i < answerElements.length; i++) {
        answerElements[i].textContent = quizArray[currentQuestionIndex].possibleAnswers[i];
    }
}

// Define a function to check the user's answer
function checkAnswer(event) {
    // Get the current question object
    console.log(this);
    console.log(event.target);

    // Check if the user's answer matches the correct answer
    if (event.target.textContent === quizArray[currentQuestionIndex].correctAnswer) {
        // Increment the score and display it
        score++;
        document.getElementById("score").textContent = "Score: " + score;
    }
    // Increment the current question index
    currentQuestionIndex++;
    // If there are more questions, display the next question
    if (currentQuestionIndex < quizArray.length) {
        displayCurrentQuestion();
    } else {
        // Otherwise, display the final score
        document.getElementById("quiz").innerHTML = "<h2>Quiz complete!</h2><p>Your score is " + score + " out of " + quizArray.length + ".</p>";
        endGame();
    }
}

function endGame() {
    document.getElementById("gameArea").style.display = "none";
    //show imput area
    clearInterval(timerInterval);
    document.querySelector(".input").classList.remove("hide");
};
//add eventlistener to grab infor from highscore button
//add console logs to help debug instead of delete or starting over
function record() {
    // retrieve current high score from global variable or local storage


    // add event listener to submit button to store high score
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.setItem('highScore', highScore);
        console.log('High score saved:', highScore);
        var highScore = JSON.parse(localStorage.getItem('highScores')) || [];
        record();
    });
}

var mySelectElement = document.getElementById("#questions");


var startButton = document.querySelector("#Start");
var questionButton = document.querySelector("#question");
// Selects element by class

//the clock, i can subtract time if needed
function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Until Gameover !";

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            // sendMessage();
            //end game function-tells user that game is over add info to leaderboard(alert? see ln46)
        }

    }, 1000);
}
var index = 0;
var displayQuestion = document.querySelector("displayQuestion")
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    setTime();
    displayCurrentQuestion();
    // displayQuestion();
})


function navigate(direction) {
    index = index + direction;
    if (index < 0) {
        index = images.length - 1;
    } else if (index > images.length - 1) {
        index = 0;
    }
};