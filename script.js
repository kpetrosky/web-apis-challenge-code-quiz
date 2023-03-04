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
        question: "1.What does API stand for?",
        possibleAnswers: ["A- Application Programming Interfaces", "B- Animal programming interfaces", "C- Analyze programming interfaces", "D- Awesome programming interfaces"],
        correctAnswer: "A"
    },
    {
        question: "2.What is one type of browser APIs?",
        possibleAnswers: ["A- Reddit", "B- DOM (Document Object Model) API", "C- parsing", "D- Chief"],
        correctAnswer: "B"
    },
    {
        question: "3. Name one company that uses a third party API?",
        possibleAnswers: ["A-Twitter", "B-Ticonderoga ", "C-Chef Boryardee", "D-Minesweeper"],
        correctAnswer: "A"
    },
    {
        question: "4.What is the program that we code APIs in?",
        possibleAnswers: ["A-Blizzard", "B- HTML", "C-CSS", "D-Javascript"],
        correctAnswer: "D"
    },
    {
        question: "5.What is the purpose of web APIS?",
        possibleAnswers: ["A-to make the programmer mad", "B-a set of functions that allows applications to access data and interact ", "C- so the user struggles when using program", "D- we don't use APIS"],
        correctAnswer: "B"
    },
]
// var questionNumber = 0;
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
    console.log(event.target.getAttribute("data-value"));

    // Check if the user's answer matches the correct answer
    if (event.target.getAttribute("data-value") === quizArray[currentQuestionIndex].correctAnswer) {
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
    var submitButton = document.createElement("button");
    submitButton.id = "submitButton";
    submitButton.textContent = "Submit";

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        storeHighScore(highScore);
    });
};
//add eventlistener to grab infor from highscore button
//add console logs to help debug instead of delete or starting over





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


function storeHighScore() {
    var highScore = score+secondsLeft;
    var userInitials = document.getElementById("initials").value
    var highScoresList = JSON.parse(localStorage.getItem("highScore")) || [];
    highScoresList.push({
        user:userInitials,
        score:highScore
    })
    localStorage.setItem("highScore", JSON.stringify(highScoresList));
    console.log("High score stored!");
    document.querySelector(".input").classList.add("hide");
    var html=""
    for(let i=0;i<highScoresList.length;i++){
        html += `<h3>User : ${highScoresList[i].user}        Score:${highScoresList[i].score}</h3>`
    }
    document.getElementById("highScoreBox").innerHTML = html
}
var store = document.querySelector("#highscore");
store.addEventListener("click",storeHighScore)
// var highScore = $(store).attr('id');

console.log("High score stored!");
// $(store).find('textarea').val(userInput);


