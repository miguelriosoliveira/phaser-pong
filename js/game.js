let GameState = {
    preload: function () {
        this.load.image("background", "assets/background.png");
        this.load.image("chicken", "assets/chicken.jpeg");
    },
    create: function () {
        this.background = this.game.add.sprite(0, 0, "background");
        this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "chicken");
        this.chicken.anchor.setTo(0.5);
        this.chicken.scale.setTo(0.5);
        this.chicken.scale.setTo(-1);
    },
    update: function () {
        this.chicken.angle += 0.5;
    }
};

let game = new Phaser.Game(640, 360, Phaser.AUTO);
game.state.add("GameState", GameState);
game.state.start("GameState");