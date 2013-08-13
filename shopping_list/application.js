$(document).ready(function(){
    var chckbx = 'input[type="checkbox"]';
    var inptxt = 'input[type="text"]';

	//strikethrough text when check check box
    $('ol').on('click', chckbx, function(){
        var check = $(this).is(":checked");
        if(check)
            $(this).parent().find(inptxt).css("text-decoration","line-through");
        else 
            $(this).parent().find(inptxt).css("text-decoration","none");
	});	
	
	// delete list item when user clicks delete button
	$('ol').on('click', 'button', function(){
		console.log($(this));
        $(this).parent().remove();
	});

	//add blank list item
	$('.add').click(function(){
		$('.shoppingList').append('<li class="toDo"><input type="text" placeholder="Write something here..."/><input type="checkbox" /><button type="button">Delete</button></li>');
	});

	$('ol').on('keydown', inptxt, function(e){
	    //get the next index of text input element
	    var next_idx = $(inptxt).index(this) + 1;
 
	    //get number of text input element in a html document
	    var tot_idx = $('body').find(inptxt).length;
		console.log(tot_idx);
 
		//enter button in ASCII code
		if(e.keyCode == 13){
            if(tot_idx == next_idx)
                $('.add').click(); //add new row
                
			//go to the next text input element
			$(inptxt+':eq(' + next_idx + ')').focus();
		}
	});
});


































