
//Timer
var timeLeft = 120;
var elem = document.getElementById("#timer");
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft === 0) {
    clearInterval(timerId);
    $("#timer").remove();
    $("#questions").html("<p>You Finished!<p>" + "<p> You got " +score+ " questions right!<p>" + "<p>You had " +timeLeft+" second remaining<p>" );
  } else {
    $("#timer").html("Timer: "+timeLeft);
    timeLeft--;
  }
}


$(document).ready(function(){
  //When the button is clicked to finish, the html is changed and the timer is stopped
  $("#button1").click(function(){
    clearInterval(timerId);
    $("#timer").remove();
    //Add up all the questions guessed correctly, and place that into the score total
    var amountCorrect = 0;          
    for(var i = 1; i <= 14; i++) {
      var radios = document.getElementsByName('animal'+i);
      for(var j = 0; j < radios.length; j++) {
        var radio = radios[j];
        if(radio.value == 1 && radio.checked) {
          amountCorrect++;
          console.log(amountCorrect);         
  }}}
  //Add the html of what will display
  $("#questions").html("<p>You Finished!<p>" + "<p> You got " +amountCorrect+ " questions right!<p>" + "<p>You had " +timeLeft+" second remaining<p>"+ "<section></section>" );
  // If the cat button is selected show a cat, same thing for all.                                         
    });
  });
