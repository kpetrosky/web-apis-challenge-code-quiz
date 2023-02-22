//this is the driving directiosn for the array
// var choices = document.querySelector("#choices");

//for loop to loop through possible answers and create a button each one
//create element (method to do ln 73)
//add text content
//on click button javascript 
//attached to on click function to check answers
//append html
var quizArray = [
    {
        question: "1.What is....",
        possibleAnswers: ["a", "b", "c", "d"],
        correctAnswer: "b"


    },
    {
        question: "2.What is....",
        possibleAnswers: ["a", "b", "c", "d"],
        correctAnswer: "b"


    },
    {
        question: "3.What is....",
        possibleAnswers: ["a", "b", "c", "d"],
        correctAnswer: "b"


    },
    {
        question: "4.What is....",
        possibleAnswers: ["a", "b", "c", "d"],
        correctAnswer: "b"


    },
    {
        question: "6.What is....",
        possibleAnswers: ["a", "b", "c", "d"],
        correctAnswer: "b"


    },
]
var questionNumber = 0;
//game number


var startButton = document.querySelector("#Start");

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");
var timerInterval;
var secondsLeft = 10;
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

startButton.addEventListener("click", function (event) {
    event.preventDefault();
    setTime();
    displayQuestion();
})

var possibleAnswers = document.querySelector('#possibleAnswers');

possibleAnswers.addEventListener("click", function (event) {
    event.preventDefault();
    displayQuestion();

    var buttonA = document.createElement('button');
    buttonA.setAttribute('value', 'A');
    buttonA.textContent = 'A';
    possibleAnswers.appendChild(buttonA);

    var buttonB = document.createElement('button');
    buttonB.setAttribute('value', 'B');
    buttonB.textContent = 'B';
    possibleAnswers.appendChild(buttonB);

    var buttonC = document.createElement('button');
    buttonC.setAttribute('value', 'C');
    buttonC.textContent = 'C';
    possibleAnswers.appendChild(buttonC);

    var buttonD = document.createElement('button');
    buttonD.setAttribute('value', 'D');
    buttonD.textContent = 'D';
    possibleAnswers.appendChild(buttonD);
});

function countSelected(selectObject) {
    var possibleAnswers = document.querySelector("#answers");
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

