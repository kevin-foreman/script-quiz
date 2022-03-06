// start quiz elements, and question and answer elements
// use "cards" for each question so they're contained nicely

var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('answer-buttons');



// Timer starts when the Start Quiz button is clicked
// timer starts at 60 seconds
// timer starts when the start button is clicked
$("#start-btn").click(function() {
    alert("Good luck!")
    startGame();
    var count=10;

var counter=setInterval(timer, 1000); // counts down by 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
    {
    clearInterval(counter);
     //counter ended, do something here
     // display score in relation to current high score
     // figure out how to store final score in local storage
     // something like localStorage.setItem  --and-- localStorage.getItem
     // return;

}
  document.getElementById("timer").innerHTML=count + " seconds remaining"; // watch for spelling
}
});

// Start game function which will hide the start button by added the hide class
// will also reveal the question container element by removing that class
var startGame = function() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
};


// make a function to move through the questions after the currentQuestionIndex
var setNextQuestion = function() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

var resetState = function() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
};

var showQuestion = function(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsEl.appendChild(button)
    })
};

// As the user selects an answer, reveal either the next question button or the restart
// then move on to the next question in the array
var selectAnswer = function(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    }
};

// Give feedback if the user selects the correct or wrong answer
var setStatusClass = function(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
};

var clearStatusClass = function(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

  // function endGame() {
//     document.getElementById("start-btn").setAttribute("class", "hidden");
// }

// Add code to html for showing the number of seconds on the page


// Questions array, yes it's long sorry about that, a refactor might include a separate JS file to keep this functionality cleaner, and allow swapping to different question sets
// this will have to work for now

var questions = [
    {
    question: 'Consider this code. How many seconds will it take for “i” to reach 5?',
      // answer array inside question array

    answers: [
          // return true if the correct answer was selected
          // return false if the wrong answer is selected
        { text: '5 seconds', correct: false },
        { text: 'It will never reach 5', correct: false },
        { text: '25 seconds', correct: true },
        { text: '50 seconds', correct: false }
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
    }
]
