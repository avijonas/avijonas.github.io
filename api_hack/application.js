$(document).ready(function(){

$('.teams').change(function(){
    var optionId = $("option:selected").attr('id');
    if(optionId != '')
        getTeamInfo(optionId);
        $('#news').empty();
        
});

//API Key 
var api_key = 'sv5r96zs9t9gbyzcjztm8734';
var getTeamInfo = function(id){
    $.ajax({
        type: "GET",
        url: "http://api.espn.com/v1/sports/basketball/nba/teams/"+ id +"/news",
        data: {'apikey': api_key},
        dataType: "jsonp"
    }).done(function(data){
        console.log(data);
        var teamInfo = data;
        for(var i = 0; i < teamInfo.headlines.length; i++) {
            console.log(teamInfo.headlines[i].headline); 
            news = teamInfo.headlines[i].links.web.href;
            $('#news').append(
                '<div>'
                    + '<h4>' + teamInfo.headlines[i].title + '</h4>'
                    + '<p>'+teamInfo.headlines[i].description+'</p>'
                    + '<a target="_blank" href= " '+teamInfo.headlines[i].links.web.href+' ">Read More</a>'
                    + 
                '</div>');
            $('#wrapper').css({backgroundColor: 'rgba(255,255,255,0.7)'});
            //teamInfo.headlines[i].links.web.href
        }
    });      
};

// in order to display other related info to the story, i need to get the id from a specifc headline or story, append that after /news

    //Add author and link for article
    //Add commenting to javascript
    //Ensure page resizes properly


});