var seconds = 01;
var minutes = 00;
var milliseconds = 00;
var countdown;
var startedTimer = false;


$(".student").click(function(){
    //if we haven't started the timer
    if(!startedTimer) {
        var timer = $(".clock p")
        //then start the timer
        startedTimer = true;
        //set an interval function to run every millisecond.
        countdown = window.setInterval(function() {
            //update timer
            timer.text(minutes + ":" + seconds + ":" + milliseconds);
            //increment millisecond every interval
            milliseconds = milliseconds + 10;
            
            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }
                
            if(seconds === 60){
                minutes++;
                seconds = 0;
            }
        
        }, 10);//run interval every 1 millisecond
    }//if statement
});





