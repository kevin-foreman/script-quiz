// start quiz elements, and question and answer elements
// use "cards" for each question so they're contained nicely

var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('answer-buttons');



// Timer starts when the Start Quiz button is clicked
// timer starts at 60 seconds
// timer starts when the start button is clicked


$("#start-btn").click(function() {
    alert("Good luck!")
    endGame()
var count=10;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

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

function endGame() {
    document.getElementById("start-btn").setAttribute("class", "hidden");
}

// Add code to html for showing the number of seconds on the page


// Questions array, yes it's long sorry about that, a refactor might include a separate JS file to keep this functionality cleaner, and allow swapping to different question sets
// this will have to work for now

const questions = [
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
