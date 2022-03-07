// start quiz elements, and question and answer elements
// use "cards" for each question so they're contained nicely

var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var finalScore = localStorage.getItem("finalScore");
var count = 60;

// var questionImage = document.getElementById('question-image');



// Timer starts when the Start Quiz button is clicked
// timer starts at 60 seconds
// timer starts when the start button is clicked
$("#start-btn").click(function() {
    alert("Good luck!");
    startGame();
    

var counter=setInterval(timer, 1000); // counts down by 1 second
// listen for a click on an incorrect answer, and deduct 10 seconds


function timer()
{
count=count-1;
if (count <= 0)
    {
    clearInterval(counter);
     // counter ended, do something here
     // show the user score and allow them to put in initials
     // Store final score in local storage
     // something like localStorage.setItem  --and-- localStorage.getItem
     // return;
};
// Add code to html for showing the number of seconds on the page using span
  document.getElementById("timer").innerHTML=count + " seconds remaining"; // prints the number to the page plus the words ... seconds remaining
}
});


// create an empty variable for the user score
var userScore = ("");
// store the user score into local storage
document.getElementById("answer-buttons").onclick = function() {
    localStorage.setItem("userScore", JSON.stringify(userScore));
};

// store all scores posted into local storage into empty array
var highScores = localStorage.setItem("highScores", JSON.stringify([]));

// Pull all scores posted from local storage
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];


// user selects next question, give some encouragement
// increment the question index by one to get another random question from the array
// call for the next random question

$("#next-btn").click(function() {
    alert("Keep it up!");
    questionIndex++;
    getNextQuestion();
});

var randomQuestions = function(){};
var questionIndex= function(){};
// console.log(randomQuestions, questionIndex);

// Start game function which will hide the start button by added the hide class
// will also reveal the question container element by removing that class
var startGame = function() {
    count = 60
    startButton.classList.add('hide');
    // math.random generates a number betwee one and zero
    // grab a question whether the number of the question is either more than zero or less than zero 50% of the time, so it's random
    randomQuestions = questions.sort(() => Math.random() - .5);
    questionIndex = 0;
    questionContainerEl.classList.remove('hide');
    getNextQuestion();
    console.log(questionIndex);
};


// make a function to move through the questions after the questionIndex
var getNextQuestion = function() {
    clearAnswers();
    showQuestion(randomQuestions[questionIndex]);
};
// only display the amount of answer buttons to match the number of available answers
// clear old answers for a new question and answer
// make the next question button visible after an answer
// make the next question button hide after getNextQuestion
var clearAnswers = function() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    };
};

var showQuestion = function(question) {
    questionEl.innerText = question.question;
    // questionImage.innerHTML = "<img src="+question.image+">";
    // console.log(question.image);
    question.answers.forEach(answer => {
    var button = document.createElement('button');
    button.innerText = answer.text
    button.classList.add('btn');
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsEl.appendChild(button);
    });
};

// store scores in local storage


// As the user selects an answer, reveal the next question button
// then move on to the next question in the array
// send feedback depending on where the user clicked
// Add restart modification for when all the questions have been answered
// Add restart modification for when the timer runs out 
// realizing I don't need the restart functionality if I use the window.location.reload(false)
// realizing I do need the restart functionality so I can still call for the user to input initials
// realizing I still need the page reload functionalitly to reset the score counter for the user
var selectAnswer = function(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct);

    // Convert to an array
    // reveal the next question button if there are still questions left and still time left on the clock
    // otherwise initiate restart
    Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > questionIndex + 1 && count >= 1) {
    nextButton.classList.remove('hide');
    } else {
    alert("You answered all the questions, or you ran out of time, let's see your score")
    startButton.innerText = "Restart";
    userScore = ("");
    startButton.classList.remove('hide');

    // relaod the page after the user has entered their initials but maintain local storage
    // window.location.reload(false);
    }
};

// Give feedback if the user selects the correct or incorrect answer
// make all the incorrect answers red
// make all the correct answers green by adding the class, and add the corresponding CSS
var setStatusClass = function(element, correct) {
    clearStatusClass(element);
    if (correct) {
    element.classList.add('correct');
    userScore++;
    } else {
    element.classList.add('incorrect');
    count = count -2;
    }
};

var clearStatusClass = function(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
};

  // function endGame() {
//     
// }




// Questions array, yes it's long sorry about that, a refactor might include a separate JS file to keep this functionality cleaner, and allow swapping to different question sets
// this will have to work for now


var questions = [ // some questions will have images, add them as an additional property inside this array
    {
    question: 'What is a CDN?',
    // image: "../assets/img/question-0-img.png",
    
      // answer array inside question array
    answers: [
          // return true if the correct answer was selected
          // return false if the incorrect answer is selected
        { text: 'Content Delivery Network', correct: true },
        { text: 'Constant Distraction Node', correct: false },
        { text: 'Coded Data Network', correct: false },
        { text: 'Computer Direct Network', correct: false }
    ]
    },
    {
    question: 'Which of the following classes are needed to display a “+” icon?',
    answers: [
        { text: 'oi', correct: false },
        { text: 'btn', correct: false },
        { text: 'mr-2', correct: false },
        { text: 'oi-plus', correct: true }
    ]
    },
    {
    question: 'Your website can only use fonts that came preinstalled on a client device or fonts that they installed themselves.',
    answers: [
        { text: 'True', correct: false },
        { text: 'False', correct: true }      ]
    },
    {
    question: 'In the DOMs event object, what does its target property refer to?',
    answers: [
        { text: 'It refers to the HTML element that was interacted with to dispatch the event.', correct: true },
        { text: 'It refers to the HTML element we want to affect as a result of our dispatched event.', correct: false }
    ]
    },

    // for some reason this question breaks my code, could not figure it out
    // {
    // question: 'What is the JavaScript equivalent to a jQuery Selector?',
    // answers: [
    //     { text: '.getElementByClass()', correct: false },
    //     { text: '.querySelectory()', correct: true },
    //     { text: '.querybyID()', correct: false },
    //     { text: '.documentElement()', correct: false }
    // ]
    // },
    {
    question: 'If you save your array of objects to the browser local storage and it looks like [Object object] when you visit it in Chrome DevTools, what is wrong?',
    answers: [
        { text: 'The array was not stringified with JSON.strigify() before saving it in Local Storage', correct: true },
        { text: 'The array was not parsed with JSON.parse() before saving it to Local Storage.', correct: false }
    ]
    },
    {
    question: 'As a developer, I want to be able to capture when a user clicks on an element. Which jQuery event method should I use?',
    answers: [
        { text: '.mouseout()', correct: false },
        { text: '.on()', correct: true },
        { text: '.focus()', correct: false },
        { text: '.mouseover()', correct: false }
    ]
    },
    {
    question: 'Which element can the submit event be attached to?',
    answers: [
        { text: 'button', correct: false },
        { text: 'input', correct: false },
        { text: 'textarea', correct: false},
        { text: 'form', correct: true}
    ]
    },
    {
    question: 'Which jQuery method would NOT help with DOM traversal?',
    answers: [
        { text: '.find()', correct: false },
        { text: '.children()', correct: false },
        { text: '.closest()', correct: false},
        { text: '.css()', correct: true}
    ]
    },
]
