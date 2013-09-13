$(document).ready(function(){



$('.teams').change(function(){
    var optionId = $("option:selected").attr('id');
    if(optionId != '')
        getTeamInfo(optionId);    
});




//API Key 
var api_key = 'sv5r96zs9t9gbyzcjztm8734';
/*
$.ajax({
    type: "GET",
    url: "http://api.espn.com/v1/sports/basketball/nba/teams",
    data: {'apikey': api_key},
    dataType: "jsonp"   
}).done(function(data){
    teams = data.sports[0].leagues[0].teams;
    console.log(teams);
    for(var i = 0; i < teams.length; i++){
        console.log(teams[i].location, teams[i].name, teams[i].id);
    }
});
*/


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
            $('#news').append('<h4>' + teamInfo.headlines[i].headline + '</h4>');  
        }
    });      
};








});