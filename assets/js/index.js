$(".button_container button").on("click",function(){
  window.location.href = "challengeslist.html?d=" + $(this).attr("class");
});
