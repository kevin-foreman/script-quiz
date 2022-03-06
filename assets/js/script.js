// start quiz elements, and question and answer elements
// use "cards" for each question so they're contained nicely

var startButton = document.getElementById("start-btn");
var infoEl = document.getElementById("info");
var questionContainer = document.getElementById("question-card");
var questionText = document.getElementById("question-1");
var answerText = document.getElementById("answer-a");
var answerText = document.getElementById("answer-b");
var answerText = document.getElementById("answer-c");
var answerText = document.getElementById("answer-d");



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
  if (count <= -1)
  {
     clearInterval(counter);
     //counter ended, do something here
     // display score in relation to current high score
     return;
   
  }
  document.getElementById("timer").innerHTML=count + " seconds remaining"; // watch for spelling
}
});

function endGame() {
    document.getElementById("start-btn").setAttribute("class", "hidden");
}

  // Add code to html for showing the number of seconds on the page

