// Challenge Back Button Link Setup
$("div.challenge_description a.menulink_top_left").attr("href","challengeslist.html?d=" + _getQueryVariable("d"));

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
  });
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
  var userFunctionReturnVals = [];
  var correctFunctionReturnVals = [];
  var success = true;
  _current_challenge_obj.argsTests.forEach(function(item,index){
    try {
      eval(editor.getValue());
      var argsCodeJSAddOn = "";
      (function(){
        item.forEach(function(i,ind){
          if(ind > 0){
            argsCodeJSAddOn += ",";
          }
          argsCodeJSAddOn += "_current_challenge_obj.argsTests[" + index + "][" + ind + "]";
        });
      })();
      userFunctionReturnVals.push({
        error: false,
        argsTested: item,
        return_value: eval(_current_challenge_obj.function_name + "(" + argsCodeJSAddOn + ");")
      });
    }catch(err){
      userFunctionReturnVals.push({
        error: true,
        argsTested: item,
        return_value: err.toString()
      });
    }
    correctFunctionReturnVals.push({
      return_value: _current_challenge_obj.possible_answer(item)
    });
  });

  userFunctionReturnVals.forEach(function(item,index){
    if(typeof item.return_value == "object"){
      if(isEqual(item.return_value,correctFunctionReturnVals[index].return_value) == false || item.error){
        success = false;
      }
    }else{
      if(item.return_value !== correctFunctionReturnVals[index].return_value || item.error){
        success = false;
      }
    }
  });

  $("div.run_info_area").addClass("opened");
  $("a.maximize_run_info_area").addClass("ran");
  if(success){
    $("div.run_info_area h1.success_status_title").addClass("success");
    $("div.run_info_area h1.success_status_title").text("success");

    $("div.run_info_area a.extra_button").text("Next Challenge");
    $("div.run_info_area a.extra_button").addClass("success");
    $("div.run_info_area a.extra_button").attr("href","challenge.html?d=" + _getQueryVariable("d") + "&q=" + ((parseInt(_getQueryVariable("q")) + 1) % 5));
  }else{
    $("div.run_info_area h1.success_status_title").addClass("fail");
    $("div.run_info_area h1.success_status_title").text("fail");

    $("div.run_info_area a.extra_button").text("Try Again");
    $("div.run_info_area a.extra_button").addClass("fail");
    $("div.run_info_area a.extra_button").attr("href","javascript:$('div.run_info_area').toggleClass('opened');");
  }
  $("div.run_info_area div.test").remove();
  userFunctionReturnVals.forEach(function(item,index){
    var test_success = "success";
    console.log(item.return_value);
    console.log(correctFunctionReturnVals[index].return_value);
    console.log(item.return_value == correctFunctionReturnVals[index].return_value);
    if(typeof item.return_value == "object"){
      if(isEqual(item.return_value,correctFunctionReturnVals[index].return_value) == false || item.error){
        test_success = "fail";
      }
    }else{
      if(item.return_value !== correctFunctionReturnVals[index].return_value || item.error){
        test_success = "fail";
      }
    }

    var test_content_HTML = "";

    item.argsTested.forEach(function(i,ind){
      test_content_HTML += "<p><code>" + _current_challenge_obj.args[ind] + " = " + i + "</code></p>";
    });
    test_content_HTML += "<p>Return Value: <code class='"  + item.error +  "'>"  + item.return_value +  "</code>";
    test_content_HTML += "<p>Expected Return Value: <code>"  + correctFunctionReturnVals[index].return_value +  "</code>";

    $("div.run_info_area").append('<div class="test"><div class="top_area"><span class="arrow" onclick="$(this).parent().next().toggleClass(\'opened\');$(this).toggleClass(\'down\');"></span><p>Test ' + (index + 1) + '</p><span class="success_status ' + test_success + '"></span></div><div class="test_content">' + test_content_HTML + '</div></div>')
  });
});
