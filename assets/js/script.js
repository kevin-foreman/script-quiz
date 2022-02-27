// call back function to create an interval timer (Set Interval)

var countdown = function() {
    var counter = 30;
    // console.log(counter);

    // Use 'setInterval()' method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
    counter--;
    mainEl.textConent = counter;
     if(counter === 0){
         clearInterval(timeInterval);
         displayTimer();
     }
    }, 1000);   
};