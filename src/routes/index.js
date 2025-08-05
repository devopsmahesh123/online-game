const express = require('express');
const router = express.Router();
const gameLogic = require('../game/logic');

// Define a route for the home page
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './src/public' });
});

// Define a route to start a new game
router.post('/start-game', (req, res) => {
    const gameState = gameLogic.startNewGame();
    res.json(gameState);
});

// Define a route to make a move in the game
router.post('/make-move', (req, res) => {
    const { move } = req.body;
    const gameState = gameLogic.makeMove(move);
    res.json(gameState);
});

// Define a route to get the current game state
router.get('/game-state', (req, res) => {
    const gameState = gameLogic.getCurrentGameState();
    res.json(gameState);
});

module.exports = router;