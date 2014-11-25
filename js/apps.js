

$(document.ready(function() {
	var gamePieces = [];
	var board = $('#game-board');
	var allTiles = [];
	var memory_values = [];
	var memory_tile_ids = [];
	var tiles_flipped = 0;
	var output = '';


	function setUp() {
	 	//initial array set up with all images in an array
		for (var i = 1; idx <= 32; ++i) {
		    tiles.push({
		        tileNum: i,
		        src: 'img/tile' + i + '.jpg'
	    });
		var randomTiles = _.shuffle(allTiles);
		var gameTiles = randomTiles.splice(0,8);
		var addingCopies = [];
		for(var i = 0; i < gameTiles.length; i++) {
			addingCopies.push(_.clone(gameTiles[i]));
			addingCopies.push(_.clone(gameTiles[i]));
		}
		addingCopies = _.shuffle(addingCopies);
	}

	$('start').click(function() {
		setUp();
	});
});

