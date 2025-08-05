function Game() {
    this.players = [];
    this.state = 'waiting'; // waiting, playing, finished

    this.addPlayer = function(player) {
        if (this.state === 'waiting') {
            this.players.push(player);
        }
    };

    this.startGame = function() {
        if (this.players.length > 1) {
            this.state = 'playing';
            // Initialize game logic here
        }
    };

    this.endGame = function() {
        this.state = 'finished';
        // Handle end of game logic here
    };

    this.getGameState = function() {
        return {
            state: this.state,
            players: this.players
        };
    };

    this.playerAction = function(playerId, action) {
        if (this.state === 'playing') {
            // Handle player actions here
        }
    };
}

module.exports = Game;