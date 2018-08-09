// Challenge Data Setup

var _current_challenge_obj;

(function(){
  let difficulties = ["easy","medium","hard"];
  _current_challenge_obj = _challenges_list[difficulties.indexOf(_getQueryVariable("d"))][_getQueryVariable("q")];
})();

$("div.challenge_description strong.title").text(_current_challenge_obj.name);
$("div.challenge_description p").html(_current_challenge_obj.description);

$("div.challenge_description div.bottom_area span.difficulty").text(_getQueryVariable("d"));
$("div.challenge_description div.bottom_area span.difficulty").addClass(_getQueryVariable("d"));
$("div.challenge_description div.bottom_area span.time").text("~" + _current_challenge_obj.time + " min");

$("div.code_editor").prepend("function " + _current_challenge_obj.function_name + "(){");

// ACE Editor (Code Editor) Init and Setup

var editor = ace.edit("main_code_editor");
editor.setTheme("ace/theme/monokai");
editor.setOptions({
  fontSize: "1.75rem",
  tabSize: "2"
})
editor.getSession().setMode("ace/mode/javascript");
