var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];

var score = 0;
var questionIndex = 0;

var container = document.querySelector("#container");
var startTime = document.querySelector("#quiz-timer");
var timer = document.querySelector("#start-button");
var questDiv = document.querySelector("#questions");

var secondsLeft = 75;
var holdInterval = 0;
var penalty = 10;
var ulMake = document.createElement("ul");

timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            startTime.textContent ="Time: " + secondsLeft;

    if (secondsLeft <= 0 ) {
        clearInterval(holdInterval);
        allDone();
        startTime.textContent = "Time is up!";
    }        
        }, 1000);
    }
    render(questionIndex);
});