
"use strict";
var gameTimer;
var matchedAlready = false;
var matchesLeftCounter = 8;
var matchCounter = 0;
var missedCounter = 0;

var clickCount = 0;

function onReady() {
	$('#victory').hide();
	setInterval(updateStats, 1000);
}

var gamePieces = [];  
for (var i = 1; i <= 32; ++i) {
    gamePieces.push("img/tile" + i + ".jpg");
}
var randomTiles = _.shuffle(gamePieces);
var gameTiles = randomTiles.splice(0,8);
var finalSet = [];
for(var i = 0; i < gameTiles.length; i++) {
	finalSet.push(_.clone(gameTiles[i]));
	finalSet.push(_.clone(gameTiles[i]));
}
finalSet = _.shuffle(finalSet);

for(var i = 0; i < 16; i++) {
	var singleSquare = $(document.createElement('img'));
	var picture = finalSet[i];
	singleSquare.attr('src', 'img/tile-back.png');
	singleSquare.data('selectedSquare', finalSet[i]);
	singleSquare.data('picture', picture);
	$('#game-board').append(singleSquare);
}

var left = $('#left');
var match = $('#match');
var missed = $('#missed');
var updatedTimer = $('#time')

// Upon clicking start, game will begin
$('#start').click(function() {
	matchesLeftCounter = 8;
	matchCounter = 0;
	missedCounter = 0;
	match.text('Successful Matches: ' + matchCounter);
	missed.text('Matches Missed: ' + missedCounter);
	left.text("You have: " + matchesLeftCounter + " matches remaining");

	gameTimer = _.now();
	var timer = window.setInterval(function() {
		var timeLength = Math.floor((_.now() - gameTimer) / 1000);
        updatedTimer.text('Timer: ' + timeLength);
	});
});

// Unfinished code to manage the selected tiles
$('#game-board img').click(function() {
	if(clickCount < 2) {
		$(this).attr("src", $(this).data("selectedSquare"));
		clickCount++;
	} else if(clickCount >= 2) {
		clickCount = 0;
	}
}); 

// Updates the 4 statistics every second
function updateStats() {
	match.text('Successful Matches' + matchCounter);
	missed.text('Matches Missed: ' + missedCounter);
	left.text("You have: " + matchesLeftCounter + " matches remaining");
	updatedTimer.text('Timer: ' + timeLength);
}

$(onReady);


