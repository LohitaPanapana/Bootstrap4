var cards = document.querySelectorAll(".card");
var notifySection = document.querySelector("#notification");

$("#notification").mouseover(function(){
	$(".card").fadeIn(2000);
})

$(".pic").mouseover(function(){
	$(this).css("opacity","0.5");
});

$(".pic").mouseout(function(){
	$(this).css("opacity","1");
});