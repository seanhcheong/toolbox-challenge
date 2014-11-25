
"use strict"
var gamePieces = [];
var board = $('#game-board');
var allTiles = [];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var output = '';

function onReady() {

	function setUp() {
	 	//initial array set up with all images in an array
		for (var i = 1; idx <= 32; ++i) {
		    gamePieces.push({
		        tileNum: i,
		        src: 'img/tile' + i + '.jpg'
	   		});
	   	}
		var randomTiles = _.shuffle(allTiles);
		var gameTiles = randomTiles.splice(0,8);
		var addingCopies = [];
		for(var i = 0; i < gameTiles.length; i++) {
			addingCopies.push(_.clone(gameTiles[i]));
			addingCopies.push(_.clone(gameTiles[i]));
		}
		addingCopies = _.shuffle(addingCopies);
		for(var i = 0; i < 16; i++) {
			var newLI = $(document.createElement("li"));
			var newImg = $(document.createElement("img"));
			newImg.attr("src", "img/tile-back.png")
			newImg.data("number", addingCopies[i]); // Which picture
			newImg.data("position", i);     // What position on the board it's in
			newImg.data("flipped", false);  // If it's flipped face up
			newImg.click(onTileClick);

			newLI.append(newImg);
			ul.append(newLI);
		}
	}

	$('start').click(function() {
		setUp();
		alert('yo');
	});
});

