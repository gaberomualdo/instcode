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

(function(){
  var argsCodeJSAddOn = "";
  _current_challenge_obj.args.forEach(function(item,index){
    if(index > 0){
      argsCodeJSAddOn += ",";
    }
    argsCodeJSAddOn += item;
  })
  $("div.code_editor").prepend("function " + _current_challenge_obj.function_name + "(" + argsCodeJSAddOn + "){");
})();

// ACE Editor (Code Editor) Init and Setup

var editor = ace.edit("main_code_editor");
editor.setTheme("ace/theme/monokai");
editor.setOptions({
  fontSize: "1.75rem",
  tabSize: "2"
})
editor.getSession().setMode("ace/mode/javascript");

// Challenge run

$("div.bottom_buttons button.run").on("click",function(){
  _current_challenge_obj.argsTests.forEach(function(item,index){
    try {
      eval(editor.getValue());

    }catch(err){

    }
  });
});
