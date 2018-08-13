var difficulties = ["easy","medium","hard"];
var difficulty = _getQueryVariable("d");
var all_challenges_of_difficulty = _challenges_list[difficulties.indexOf(difficulty)];

all_challenges_of_difficulty.forEach(function(item,index){
  $("div.challenges_list").addClass(difficulty);
  $("div.challenges_list").append("<a class='" + item.success + "' href='challenge.html?d=" + difficulty + "&q=" + index + "'>" + item.name + "</a>")
});
