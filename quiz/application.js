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
   
    if (right[1] == correct){
      score++;
      $(".score").html("Correct Answers: " + score + " out of 5");
      $(".smiley").show().hide(5000);
      $(".sad").hide();
    }else {
      $(".sad").show().hide(5000);
      $(".smiley").hide();
    }
    
    //If last question show message
    if(index == 4) {
      clear("Congrats on finishing!!");      
    }else{
      //Show next question
      index ++;
      displayQuestion();
    }
  };
  
  //Set click handler for td
  $("td").on('click',compare);  
  
  var seconds = 25;
  $('.second').html(seconds);
  timer = setInterval(generateTime, 1000);
  
  function generateTime(){
    seconds--;
    if(seconds < 10)
      $('.second').html('0'+seconds);
    else
      $('.second').html(seconds);
    
    if(seconds < 5){
      $('body').animate( { backgroundColor: "red" }, 250 ).animate( { backgroundColor: "#3b4648" }, 250 )
    }
    
    if(seconds == 0){
      clear('Out of time');      
    }
  }
  
  var clear = function(x){
    clearInterval(timer); 
    $("td").off('click');
    $('button').hide();
    $('table').remove();
    $('h2').html(x).css({
      'text-align':'center', 
      'font-size':'100px', 
      'width':'100%', 
      'margin':'100px 0 0', 
      'padding':'0', 
      'top':'0', 
      'left':'0'});
  }
}); 