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
var endTime = 0;
var penalty = 10;
var ulMake = document.createElement("ul");
// create timer 
timer.addEventListener("click", function() {
    if (endTime === 0) {
        endTime = setInterval(function () {
            secondsLeft--;
            startTime.textContent ="Time: " + secondsLeft;

    if (secondsLeft <= 0 ) {
        clearInterval(endTime);
        allDone();
        startTime.textContent = "Time is up!";
    }        
        }, 1000);
    }
    render(questionIndex);
});

function render(questionIndex) {
  questDiv.innerHTML = "";
  ulMake.innerHTML = "";
// for loop for questions
for (var i = 0; i < questions.length; i++ ){
var questionOpt = questions[questionIndex].title;
var userChoice = questions[questionIndex].choices;
questDiv.textContent = questionOpt;
}

userChoice.forEach(function(newItem) {
     var listEl = document.createElement("li");
     listEl.textContent = newItem;
     questDiv.appendChild(ulMake);
     ulMake.appendChild(listEl);
     listEl.addEventListener("click", (compare));
})
}
// creates new questions
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    if (element.textContent == questions[questionIndex].answer) {
        score++;
        createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
    } else {
        secondsLeft = secondsLeft - penalty;
        createDiv.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }
  }
  questionIndex++;

  if (questionIndex >= questions.length) {
    allDone();
    createDiv.textContent = "End of quiz!" + " " + "You got " + score + "/" + questions.length + "Correct!";
  } else {
    render(questionIndex);
  }
  questDiv.appendChild(createDiv);

}

function allDone() {
    questDiv.innerHTML = "";
    startTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questDiv.appendChild(createP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(endTime);
        createP.textContent = "Your final score is: " + timeRemaining

        questDiv.appendChild(createP2);
    }
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "createLabel");
        createLabel.textContent = "Enter your initials: ";

        questDiv.appendChild(createLabel);

        var createInput = document.createElement("input");
        createInput.setAttribute("type", "text");
        createInput.setAttribute("id", "initials");
        createInput.textContent = "";

        questDiv.appendChild(createInput);

        var createSubmit = document.createElement("button");
        createSubmit.setAttribute("type", "submit");
        createSubmit.setAttribute("id", "Submit");
        createSubmit.textContent = "Submit";

        questDiv.appendChild(createSubmit);

        createSubmit.addEventListener("click", function(){
            var initials = createInput.value;
            if (initials === null) {
                console.log("No value entered!");
            } else {
                var finalScore = {
                    initials: initials,
                    score: timeRemaining
                }
                console.log(finalScore);
                var totalScores = localStorage.getItem("totalScores");
                if (totalScores === null) {
                    totalScores = [];
                } else {
                    totalScores = JSON.parse(totalScores);
                }
                totalScores.push(finalScore);
                var newScore = JSON.stringify(totalScores);
                localStorage.setItem("totalScores", newScore);
                // add high score HTML
                window.location.replace("");
            }
        })





}