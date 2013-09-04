$(document).ready(function(){

	var questions = [
                {question:"What was the color of George Washington's white horse?",
                 choices:["red", "white", "blue", "green"],
                 answer:1},
                {question:"Who is the current host of 'The Price is Right'?",
                 choices:["Bob Barker", "Steve Harvey" , "Drew Carey", "Walter Cronkite"],
                 answer:2},
                {question:"The Soup Nazi from Seinfeld made a guest appearance on this show?",
                 choices:["Friends", "30 Rock", "Curb Your Enthusiam", "Scrubs"],
                 answer:3},
                {question:"54 is 45 more than...",
                 choices:["9", "8", "11", "3"],
                 answer:0},
                {question:"Which NBA franchise has won the most championships?", 
                 choices:["LA Lakers", "San Antonio Spurs", "Boston Celtics", "Miami Heat"],
                 answer:2}
                ];
  
  var index = 0;
  var correct = null;
  var score = 0;
   
  //place questions and answers in respective areas
  var displayQuestion = function(){
    $(".question").html(questions[index].question);
    //set correct with to the answer of that question
    correct = questions[index].answer;
    for (var i = 0; i < 4; i++)
      $("#c"+i).html(questions[index].choices[i]);
  };
                     
  displayQuestion();

  
  //get id of answer clicked on compares to right correct answer
  var compare = function(){
    var right = $(this).find("p").attr("id");
    questions[index].userAnswer = right[1]; 
    $("#c" +correct).parent().addClass("highlight");
   
    if (right[1] == correct){
      score++;
      $(".score").html("Correct Answers: " + score + " out of 5");
    	$(".smiley").show();
    	$(".sad").hide();
	  }else {
  		$(".sad").show();
  		$(".smiley").hide();
	  }
      $("td").off('click');
  };
  
  //Set click handler for td
  $("td").on('click',compare);
  
 //go to next question
  $("button").click(function(){
    index ++;
    $("#c" +correct).parent().removeClass("highlight");
    $(".smiley").hide();
    $(".sad").hide();
    displayQuestion();
    $("td").on('click',compare); 
  });
     
//http://www.restyr.com/simple-javascript-jquery-timer/
function _timer(callback)
{
    var time = 20;     //  The default time of the timer
    var mode = 0;     //    Mode: count up or count down
    var status = 1;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;
 
        if(status == 0)
        {
            status = 1;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 86400)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    function generateTime()
    {
        var second = time % 60;
        second = (second < 10) ? '0'+second : second; 
        $('div.timer span.second').html(second);  
    }
}
var timer;
 
$(document).ready(function(e) 
{
    timer = new _timer
    (
        function(time)
        {
          if(time == 0)
          {
              timer.stop();
              alert('time out');
          }
        }
    );
    timer.reset(60);
    timer.mode(0);
});


  
  
});