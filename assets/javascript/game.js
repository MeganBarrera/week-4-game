//Random Number Generator
$( document ).ready(function(){
buttons = ['assets/images/crystal1.jpg', 'assets/images/crystal2.jpg', 'assets/images/crystal3.jpg', 'assets/images/crystal4.jpg'];

var wins = 0;
var losses = 0;
var score = 0;
var min = 19;
var max = 120;

window.onload = generateRandomNumber;
function generateRandomNumber() {
	var randomNumber = (Math.floor(Math.random() * 10) + 18);
	$("#randomNumber").text(randomNumber)
	document.getElementByID(".randomNumber").innerHTML = number;

//Wins
	if (randomNumber === points) {
		wins ++;
		$("#wins").html("<h3>" + wins + "</h3>");
	}
//Losses
	else (points > randomNumber)
    	losses++;
    	$("#losses").html("<h3>" + losses + "</h3>");
//Score
function restart() {
	$("#score").text(0);
};
};

//Buttons
	$("button").on("click", function() {
		var min = 19
		var max = 120
		var randomNumber = Math.floor(Math.random() * 10) + 18;
		randomNumber.addClass("#points")


	var min = 1
	var max = 12

	var randomNumber = Math.floor(Math.random() * 12);

});
//Score

//Score Generator