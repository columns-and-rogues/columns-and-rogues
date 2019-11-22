import { updateCharacter } from '../services/game-api.js';
import { createBoard } from './boardCellArray.js';
import saveBoard from '../util/saveBoard.js';

const runDeath = (character) => {
    const gameOver = document.querySelector('#game-over');
    gameOver.classList.remove('hidden');
    
    character.boardsSurvived = 0;
    character.hp = 5;
    character.gold = 0;
    character.itemOne = 1;
    character.itemTwo = 0;
    character.itemThree = 0;
    character.itemFour = 0;
    character.itemFive = 0;
    character.goldTilesRemaining = 3;
    character.itemTilesRemaining = 3;
    character.monsterTilesRemaining = 5;
    character.unknownTilesRemaining = 24;
    character.x = 0;
    character.y = 0;

    saveBoard(createBoard(2), character);

    const saveEvent = async() => {
        await updateCharacter(character);
    };
    saveEvent();
};

export default runDeath;
