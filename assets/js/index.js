$(".button_container button").on("click",function(){
  window.location.href = "challenge.html?d=" + $(this).attr("class") + "&q=" + Math.floor(Math.random() * 5);
});
