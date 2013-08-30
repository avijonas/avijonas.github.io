$(document).ready(function(){

	var questions = [
                {question:"What was the color of George Washington's white horse?",
                 choices:["red", "white", "blue", "green"],
                 answer:1},
                {question:"Who is the current host of 'The Price is Right'?",
                 choices:["Bob Barker", "Steve Harvey" , "Drew Carey", "Walter Cronkeit"],
                 answer:2},
                {question:"Which show did the Soup Nazi from Seinfeld make a guest appearance?",
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
      $(".score").html("You have answered " + score + " correctly");
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
     

  
  
});