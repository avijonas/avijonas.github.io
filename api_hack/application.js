$(document).ready(function(){







//API Key 
var api_key = 'sv5r96zs9t9gbyzcjztm8734';

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


var getTeamInfo = function(id){
    $.ajax({
        type: "GET",
        url: "http://api.espn.com/v1/sports/basketball/nba/teams/"+ id +"/news",
        data: {'apikey': api_key},
        dataType: "jsonp"
     }).done(function(data){
        console.log(data);
        var teamInfo = data;
        console.log(teamInfo.headlines[0].headline);
        });      
    };                
setTimeout(run, 2000);
function run(){
    getTeamInfo(30);
}










});