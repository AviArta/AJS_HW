// Модуль App - отвечающий за запуск приложения

import './domain.js';
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const game = new Game();
game.start();
