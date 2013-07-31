$(document).ready(function(){
    var difference = 0;
    var orgDifference = 0;
	var randomNumber = Math.floor(Math.random()*101);
	console.log(randomNumber);
    
    function IsNumeric(num) {
        return (num >=0 || num < 0);
    }
	
    $(".guess").keyup(function(event){
        console.log(event);
        if(event.keyCode == 13){
            $(".submit").trigger("click");
        }
    });

	$(".submit").click(function() {
		var guessedNumber = $(".guess").val();
        
        //Ensure user input is numeric
        //alert(guessedNumber);
        result = IsNumeric(guessedNumber);
        if(!result){    
            alert('You must submit a numeric value');
            return(result);
        }
        
		orgDifference = difference;        
		
        difference = Math.abs(randomNumber - guessedNumber);
		console.log(difference);
        
		if(difference > orgDifference) {
			$(".cold").effect( "pulsate", {times:3}, 1000 );
		} else {
			$(".hot").effect( "pulsate", {times:3}, 1000 );
		}

		if (guessedNumber > randomNumber){
			$(".task").html("<h2>Your guess is too HIGH. Try again</h2>");
			$(".guess").val(" ");
		}
		else if (guessedNumber < randomNumber) {
			$(".task").html("<h2>Your guess is too LOW. Try again</h2>");
			$(".guess").val(" ");
		}else if (guessedNumber == randomNumber) {
			$(".task").html("<h2>Congratulations, you win!!!</h2>");			
		}else {
			$(".task").html("</h2>Try again</h2>");
		}		
	});
});


// tried to use replaceWith("<h2>...."), but becuase replaceWith <h2 class="title"> everytime i would reference that DIV wouldnt work becuase it didnt exist
//also set $(".guess").val() to variable guessedNumber becuase its cleaner than using $(".guess").val() in the IF statement all the time
//put in the .randomNumber and used replaceWith randomNumber variable to test IF statement

//Otherwise you start out with two variables. currentDiff and previousDiff. When someone guesses updated currentDiff with the current difference. Compare currentDiff with previousDiff if previousDiff has a value. Then do the necessary steps and before your finished update previousDiff with currentDiff if the users guess isn't the random Number