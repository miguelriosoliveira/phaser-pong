const gameProperties = {
	screenWidth: 640,
	screenHeight: 480,
};

let mainState = function (game) {
};
mainState.prototype = {
	preload: function () {

	},

	create: function () {

	},

	update: function () {

	},
};

let game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');
