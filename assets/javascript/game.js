//Random Number Generator
var wins = 0;
var losses = 0;

function numberGenerator(points) {
	var min = 19
	var max = 120

	var randomNumber = Math.floor(Math.random() * 10) + 18;
	randomNumber.addClass("#randomNumber")

//Wins
	if (randomNumber === points) {
		wins ++;
		$("#wins").html("<h3>" + wins + "</h3>");
	}
//Losses
	else {
    	losses++;
    	$("#losses").html("<h3>" + losses + "</h3>");
	}

//Buttons
	$("#button1").on("click", function() {
		var randomNumber = Math.floor(Math.random() * 10) + 18;
		randomNumber.addClass("#randomNumber")
	}


$("#heads").on("click", function() {
  headsCount++;
  $("#heads-chosen").text(headsCount);
  $("#guess").html("<b>Heads</b>");
  flipThatCoin(0);
});

$("#tails").on("click", function() {
  tailsCount++;
  $("#tails-chosen").text(tailsCount);
  $("#guess").html("<b>Tails</b>");
  flipThatCoin(1);
});



}

	var min = 1
	var max = 12

	var randomNumber = Math.floor(Math.random() * 12);


//Score

//Score Generator